import { defineConfig as astroDefineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "@playform/compress";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import icon from "astro-icon";
import minify from "../astro-integrations/minify";
import common from "@www/common";

export const defineConfig = (site: string, contact: string, branding: string) =>
  astroDefineConfig({
    site,
    prefetch: true,
    integrations: [
      common({ site, contact, branding }),
      tailwind(),
      sitemap(),
      compress({
        SVG: false,
        HTML: false,
      }),
      robotsTxt({
        policy: [
          {
            userAgent: "*",
          },
        ],
        sitemap: true,
      }),
      minify(),
      preact(),
      icon(),
    ],
  });
