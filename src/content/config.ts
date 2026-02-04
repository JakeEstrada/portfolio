import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    repoUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    demoVideoUrl: z.string().optional(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    summary: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};

