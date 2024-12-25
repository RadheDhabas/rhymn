'use server';

import { signIn, signOut } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY);

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const formdata = Object.fromEntries(formData.entries());

    return await signIn('credentials', {
      redirect: true,
      ...formdata,
      redirectTo: '/'
    });
  } catch (error) {
    console.error("Error while signing in...", error);
    throw error;
  }
}

export async function signout() {
  try {
    return await signOut();
  }
  catch (error) {
    console.log("Error in sign out", error);
  }
}
// sign up a user
export async function signup(prevState: { message: string, step: number } | undefined,
  formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiresAt = new Date(Date.now() + 300000);

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      if (existingUser.otp && existingUser.otpExpiresAt && existingUser.otpExpiresAt > new Date()) {
        // User has an unverified OTP that is still valid
        return {
          message: existingUser.email,
          step: 2,
        };
      }
      if (existingUser.otp && (!existingUser.otpExpiresAt || existingUser.otpExpiresAt <= new Date())) {
        // OTP expired, generate a new OTP
        await prisma.user.update({
          where: { email },
          data: {
            otp,
            otpExpiresAt,
            password: hashedPassword, // Optional: Update password if allowed
          },
        });
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'Your OTP Code',
          text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
        });
        return { message: existingUser.email, step: 2 };
      }
      return {
        message: "User exists. Please login or reset your password.",
        step: 1,
      };
    }

    const userData = {
      "email": email,
      "password": hashedPassword,
      "otp": otp,
      "otpExpiresAt": otpExpiresAt,
    }
    const user = await prisma.user.create({
      data: userData,
    });
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    })
    return { message: user.email, step: 2 };
  } catch (error) {
    console.error("error in sign up: ", error);
    throw error;
  }
}

// verify otp
export async function verifyWithOtp(initialstate: boolean | undefined, formData: FormData) {
  const email = formData.get('email') as string;
  const otp = formData.get('otp');
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return false;
    }

    if (!user.otp || !user.otpExpiresAt || user.otpExpiresAt <= new Date()) {
      return false;
    }

    if (user.otp === otp) {
      await prisma.user.update({
        where: { email },
        data: { otp: null, otpExpiresAt: null },
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("error in otp verifying");
    throw error;
  }
}