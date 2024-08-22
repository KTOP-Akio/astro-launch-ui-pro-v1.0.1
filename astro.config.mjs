import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel/serverless";
import vercelStatic from "@astrojs/vercel/static";

// const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://creativetimofficial.github.io",
  base: "/",
  image: {
    service: passthroughImageService(),
    domains: ["astro.build"],
  },
  output: 'static',
  adapter: vercelStatic()
});