'use server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// getting detail of a user
async function getUserData(userId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        return user
    } catch (error) {
        console.error('Error in getUserData function:', error);
        return null;
    }
}