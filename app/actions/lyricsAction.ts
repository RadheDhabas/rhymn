'use server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllSongs(page: number, query: string) {
  try {
    return await prisma.song.findMany();
  } catch (error) {
    console.error("Error while fetching lyrics...", error);
    throw error;
  }
}
async function seedCategories() {
  const categories = ['Pop', 'Rap', 'R&B', 'Rock', 'Country', 'Non-music'];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {}, // No update needed
      create: { name }, // Create category if it doesn't exist
    });
  }

  console.log('Categories seeded successfully!');
}

export async function getLyricById(id: string) {
  try {
    return await prisma.song.findUnique({
      where: { id },
      include: {
        artists: true,
      },
    });
  } catch (error) {
    console.error("Error while fetching lyrics...", error);
    throw error;
  }
}

const AddLyricsFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  lyrics: z.string().min(1, "Lyrics are required"),
  releaseDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid release date",
  }),
  album: z.string().optional(),
  cloudUrl: z.string().url().optional(),
  youtubeUrl: z.string().url().optional(),
  artists: z.array(z.string().min(1)).nonempty("At least one artist is required"),
  tags: z.array(z.string().min(1)).optional(),
  categories: z.array(z.string().min(1)).nonempty("At least one category is required"),
  featuring: z.array(z.string()).optional(),
  producedBy: z.string().optional(),
  writtenBy: z.array(z.string().min(1)).optional(),
});
export async function createLyric(initialstate: { message: string } | null, formData: FormData) {
  try {
    const categories: string[] = [];
    formData.forEach((value, key) => {
      if (key === 'categories') {
        if (typeof value === 'string') {
          categories.push(value.trim());
        }
      }
    });
    const formattedData = {
      title: formData.get('title')?.toString().trim(),
      lyrics: formData.get('lyrics')?.toString().trim(),
      releaseDate: formData.get('releaseDate')?.toString().trim(),
      album: formData.get('album')?.toString().trim(),
      cloudUrl: formData.get('cloudUrl')?.toString().trim(),
      youtubeUrl: formData.get('youtubeUrl')?.toString().trim(),
      artists: formData.get('artists')?.toString().split(',').map((artist) => artist.trim()) || [],
      tags: formData.get('tags')?.toString().split(',').map((tag) => tag.trim()) || [],
      categories: categories, // already processed
      featuring: formData.get('featuring')?.toString().split(',').map((feature) => feature.trim()) || [],
      producedBy: formData.get('producedBy')?.toString().trim(),
      writtenBy: formData.get('writtenBy')?.toString().split(',').map((writer) => writer.trim()) || [],
    };

    let validatedData = AddLyricsFormSchema.parse(formattedData);
   
    const song = await prisma.song.create({
      data: {
        title: validatedData.title,
        lyrics: validatedData.lyrics,
        releaseDate: new Date(validatedData.releaseDate),
        album: validatedData.album ? {
          connectOrCreate: {
            where: { name: validatedData.album },
            create: { name: validatedData.album },
          },
        } : undefined,
        cloudUrl: validatedData.cloudUrl,
        youtubeUrl: validatedData.youtubeUrl,
        artists: {
          connectOrCreate: validatedData.artists.map((artist) => ({
            where: { name: artist },
            create: { name: artist },
          })),
        },
        tags: {
          connectOrCreate: validatedData.tags?.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        categories: {
          connect: validatedData.categories.map((category) => ({
            name: category,
          })),
        },
        featuring: (validatedData.featuring ?? []).filter((feature) => feature.trim() !== '').length > 0 ? {
          connectOrCreate: validatedData.featuring?.map((feature) => ({
            where: { name: feature.trim() },
            create: { name: feature.trim() },
          })),
        } : undefined,
        producedBy: validatedData.producedBy && validatedData.producedBy.trim() !== '' ? validatedData.producedBy : undefined,
        writtenBy: {
          connectOrCreate: validatedData.writtenBy?.map((writer) => ({
            where: { name: writer },
            create: { name: writer },
          })),
        },
      },
    });

    return { message: true };
  } catch (error) {
    throw error;
  }
}