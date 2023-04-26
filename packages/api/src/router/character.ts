import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const characterRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return [{ name: "Aneury" }, { name: "Michelle" }];
  }),
});
