import type { TRPCRouterRecord } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure } from '~/server/trpc';


export const __ROUTER__NAME__ = {
  greeting: publicProcedure
  .input(
    z.object({
      who: z.string(),
      who2: z.number(),
      who3: z.array(z.string()),
      who4: z.string(),
      who5: z.string(),
      who6: z.string(),
      who7: z.string(),
      who8: z.string(),
      who9: z.object({
        who: z.number(),
        who2: z.array(z.string()),
        who3: z.string(),
        who4: z.string(),
        who5: z.string(),
        who6: z.string(),
        who7: z.string(),
        who8: z.string(),
      })
    }),
  ).output(
    z.object({
      who: z.string(),
      who2: z.number(),
      who3: z.array(z.string()),
      who4: z.string(),
      who5: z.string(),
      who6: z.string(),
      who7: z.string(),
      who8: z.string(),
      who9: z.object({
        who: z.number(),
        who2: z.array(z.string()),
        who3: z.string(),
        who4: z.string(),
        who5: z.string(),
        who6: z.string(),
        who7: z.string(),
        who8: z.string(),
      })
    }),
  )
  .query(({ input }) => `hello ${input.who}` as any),
  greeting2: publicProcedure
    .input(
      z.object({
        who: z.string(),
      }),
    )
    .query(({ input }) => `hello ${input.who}`),
  greeting3: publicProcedure
  .input(
    z.object({
      who: z.string(),
      who2: z.number(),
      who3: z.array(z.string()),
      who4: z.string(),
      who5: z.string(),
      who6: z.string(),
      who7: z.string(),
      who8: z.string(),
      who9: z.object({
        who: z.number(),
        who2: z.array(z.string()),
        who3: z.string(),
        who4: z.string(),
        who5: z.string(),
        who6: z.string(),
        who7: z.string(),
        who8: z.string(),
      })
    }),
  ).output(
    z.object({
      who: z.string(),
      who2: z.number(),
      who3: z.array(z.string()),
      who4: z.string(),
      who5: z.string(),
      who6: z.string(),
      who7: z.string(),
      who8: z.string(),
      who9: z.object({
        who: z.number(),
        who2: z.array(z.string()),
        who3: z.string(),
        who4: z.string(),
        who5: z.string(),
        who6: z.string(),
        who7: z.string(),
        who8: z.string(),
      })
    }),
  )
  .query(({ input }) => `hello ${input.who}` as any),
  greeting4: publicProcedure
    .input(
      z.object({
        who: z.string(),
      }),
    )
    .query(({ input }) => `hello ${input.who}`),
  greeting5: publicProcedure
  .input(
    z.object({
      who: z.string(),
      who2: z.number(),
      who3: z.array(z.string()),
      who4: z.string(),
      who5: z.string(),
      who6: z.string(),
      who7: z.string(),
      who8: z.string(),
      who9: z.object({
        who: z.number(),
        who2: z.array(z.string()),
        who3: z.string(),
        who4: z.string(),
        who5: z.string(),
        who6: z.string(),
        who7: z.string(),
        who8: z.string(),
      })
    }),
  ).output(
    z.object({
      who: z.string(),
      who2: z.number(),
      who3: z.array(z.string()),
      who4: z.string(),
      who5: z.string(),
      who6: z.string(),
      who7: z.string(),
      who8: z.string(),
      who9: z.object({
        who: z.number(),
        who2: z.array(z.string()),
        who3: z.string(),
        who4: z.string(),
        who5: z.string(),
        who6: z.string(),
        who7: z.string(),
        who8: z.string(),
      })
    }),
  )
  .query(({ input }) => `hello ${input.who}` as any),
  childRouter: {
    hello: publicProcedure.query(() => 'there'),
    doSomething: publicProcedure.mutation(() => 'okay'),
  },
} satisfies TRPCRouterRecord
