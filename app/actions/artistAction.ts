'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllArtists(page: number, query: string) {
  try {
    return await prisma.artist.findMany();
  } catch (error) {
    console.error("Error while fetching artist...", error);
    throw error;
  }
}

export async function getArtistById(id: string) {
  try {
    return await prisma.artist.findUnique({
      where: { id },
      include: {
        songs: {
            select: {
                id: true,
                image: true,
                title: true,    
                cloudUrl: true,
              },
        }
      },
    });
  } catch (error) {
    console.error("Error while fetching artist...", error);
    throw error;
  }
}