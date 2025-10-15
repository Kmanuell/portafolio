import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().max(180),
    cover: z.string().optional(),
    date: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    kpi: z.string().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { proyectos };
