import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/painting",
    "/about",
    "/api/contact",
    "/contact",
    "/shop",
    "/cart",
    "/products/(.*)",
    "/api/checkout_sessions",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
