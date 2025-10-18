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

import type { Plugin } from "vite";
import type { CommonIntegrationOptions } from "common";

export function createVitePlugin(options: CommonIntegrationOptions): Plugin {
  const virtualModuleId = "virtual:cfg";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "hyro",
    resolveId: (id) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load: (id) => {
      if (id !== resolvedVirtualModuleId) return;

      return `export const site = ${JSON.stringify(options.site)};\nexport const hostname = ${JSON.stringify(new URL(options.site).hostname)};\nexport const contact = ${JSON.stringify(options.contact)}\nexport const branding = ${JSON.stringify(options.branding)};`;
    },
  };
}
