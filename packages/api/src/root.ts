import { authRouter } from "./router/auth";
import { characterRouter } from "./router/character";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  character: characterRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
