import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ base: './src/pages/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    id: z.string(),
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string().optional(),
    position: z.string(),
    image: z.object({
      source: image(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  projects: projectCollection,
};