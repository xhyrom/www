<script lang="ts">
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

  import { crossfade, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let toolkit: {
    name: string;
    icon: string;
    desc: string;
    svg: string;
  }[] = [];

  let activeTechName: string | null = null;

  const [send, receive] = crossfade({
    duration: 600,
    easing: quintOut,
    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `,
      };
    },
  });

  function close() {
    activeTechName = null;
  }
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && close()} />

<div class="flex flex-wrap gap-3">
  {#each toolkit as tech}
    <button
      type="button"
      on:click={() => (activeTechName = tech.name)}
      class="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900/40 backdrop-blur-md border border-white/10 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-amber-400/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
    >
      <div
        class="text-neutral-500 group-hover:text-amber-400 transition-colors flex items-center justify-center w-4 h-4 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current"
      >
        {@html tech.svg}
      </div>

      <div class="relative inline-flex items-center justify-center">
        <span class="opacity-0 pointer-events-none">{tech.name}</span>

        {#if activeTechName !== tech.name}
          <span
            class="absolute whitespace-nowrap"
            in:receive={{ key: tech.name }}
            out:send={{ key: tech.name }}
          >
            {tech.name}
          </span>
        {/if}
      </div>
    </button>
  {/each}
</div>

{#each toolkit.filter((t) => t.name === activeTechName) as tech (tech.name)}
  <div
    class="fixed inset-0 z-100 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center cursor-pointer"
    transition:fade={{ duration: 300 }}
    on:click={close}
    on:keydown={(e) => (e.key === "Enter" || e.key === " ") && close()}
    role="button"
    tabindex="0"
  >
    <div
      class="relative w-85 p-8 bg-neutral-900 border border-amber-400/40 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center cursor-auto"
      on:click|stopPropagation
      on:keydown|stopPropagation
      role="presentation"
    >
      <div
        class="w-20 h-20 rounded-3xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6 shadow-lg shadow-amber-400/5 text-amber-400 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:fill-current"
        transition:fade={{ duration: 400, delay: 150 }}
      >
        {@html tech.svg}
      </div>

      <div class="h-10 flex items-center justify-center">
        <h3
          class="text-3xl font-extrabold text-white m-0 tracking-tight"
          in:receive={{ key: tech.name }}
          out:send={{ key: tech.name }}
        >
          {tech.name}
        </h3>
      </div>

      <p
        class="text-neutral-400 text-sm leading-relaxed mt-4"
        transition:fade={{ duration: 400, delay: 200 }}
      >
        {tech.desc}
      </p>

      <button
        type="button"
        class="mt-8 px-6 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 hover:text-amber-400 transition-colors cursor-pointer"
        on:click={close}
      >
        Close
      </button>
    </div>
  </div>
{/each}
