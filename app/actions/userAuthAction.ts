'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

// ...   prevState: string | undefined,

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const formdata = Object.fromEntries(formData.entries());

    const result = await signIn('credentials', { 
      redirect: true, 
      ...formdata,
      redirectTo: '/'
    });
    console.log("result: ", result);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
export async function signout() {
  try {
    await signOut();
  }
  catch (error) {
    console.log("Error in sign out", error);
  }
}