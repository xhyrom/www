/**
 * @license
 * Copyright (c) 2022 Jozef Steinhübl
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import type { AstroIntegration } from "astro";
import { readdirSync, statSync } from "fs";
import { join, extname, relative, dirname } from "path";
import { fileURLToPath } from "url";
import { createVitePlugin } from "./vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function lookup(dir: string, base = dir): string[] {
  let files: string[] = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files = files.concat(lookup(fullPath, base));
    } else if (extname(fullPath) === ".astro") {
      const rel = relative(base, fullPath);
      files.push(rel);
    }
  }

  return files;
}

export interface CommonIntegrationOptions {
  site: string;
  contact: string;
  branding: string;
}

export default (options: CommonIntegrationOptions): AstroIntegration => {
  return {
    name: "hyro:common",
    hooks: {
      "astro:config:setup": async ({ updateConfig, injectRoute }) => {
        const dir = join(__dirname, "pages");

        for (const page of lookup(dir)) {
          injectRoute({
            pattern: page.replace(/\.astro$/, ""),
            entrypoint: join(dir, page),
          });
        }

        updateConfig({
          vite: {
            plugins: [createVitePlugin(options)],
          },
        });
      },
    },
  };
};
