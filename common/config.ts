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

import { contact } from "virtual:cfg";

export const AGE = 16;

export const SOCIALS = [
  {
    name: "GitHub",
    link: "https://github.com/xhyrom/",
    icon: "github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jozefsteinhubl/",
    icon: "linkedin.svg",
  },
  {
    name: "Discord",
    link: "https://s.xhyrom.dev/discord",
    icon: "discord.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/hyrousek/",
    icon: "twitter.svg",
  },
  {
    name: "ko-fi",
    link: "https://ko-fi.com/xhyrom",
    icon: "ko-fi.svg",
  },
  {
    name: "email",
    link: `mailto:${contact}`,
    icon: "mail.svg",
  },
] satisfies {
  name: string;
  link: string;
  icon: string;
}[];

export const SKILLS = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "Bun",
    icon: "logos:bun",
  },
  {
    name: "NodeJS",
    icon: "logos:nodejs-icon-alt",
  },
  {
    name: "Deno",
    icon: "logos:deno",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "NextJS",
    icon: "file-icons:nextjs",
  },
  {
    name: "Astro",
    icon: "vscode-icons:file-type-astro",
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Ruby",
    icon: "mdi:language-ruby",
    color: "#f44336",
  },
  {
    name: "Ruby on Rails",
    icon: "simple-icons:rubyonrails",
    color: "#f44336",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Kotlin",
    icon: "logos:kotlin-icon",
  },
  {
    name: "Rust",
    icon: "vscode-icons:file-type-rust",
  },
  {
    name: "Go",
    icon: "vscode-icons:file-type-go-aqua",
  },
  {
    name: "Lua",
    icon: "devicon:lua",
  },
  {
    name: "Prisma Client",
    icon: "skill-icons:prisma",
  },
  {
    name: "MySQL",
    icon: "logos:mysql-icon",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "Redis",
    icon: "devicon:redis",
  },
  {
    name: "Docker",
    icon: "skill-icons:docker",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
  },
  {
    name: "GitHub Actions",
    icon: "devicon:githubactions",
  },
  {
    name: "Cloudflare",
    icon: "logos:cloudflare-icon",
  },
  {
    name: "Cloudflare Pages",
    icon: "simple-icons:cloudflarepages",
    color: "#f48120",
  },
  {
    name: "Cloudflare Workers",
    icon: "logos:cloudflare-workers-icon",
  },
  {
    name: "Zed",
    icon: "simple-icons:zedindustries",
  },
  {
    name: "Visual Studio Code",
    icon: "logos:visual-studio-code",
  },
  {
    name: "IntelliJ IDEA",
    icon: "logos:intellij-idea",
  },
] satisfies {
  name: string;
  icon: string;
  color?: string;
}[];

export const PROJECTS = [
  {
    name: "setup-bun",
    link: "https://github.com/oven-sh/setup-bun",
    desc: "Set up your GitHub Actions workflow with a specific version of Bun.",
  },
  {
    name: "gimi",
    link: "https://github.com/xHyroM/gimi",
    desc: "tool for managing multiple git remotes as mirrors written in c",
  },
  {
    name: "Roles Bot",
    link: "https://github.com/xHyroM/roles-bot",
    desc: "Simplify role assignment with interactive buttons and dropdowns in Discord. Using Cloudflare Workers.",
  },
  {
    name: "Blom",
    link: "https://github.com/xhyrom/blom",
    desc: "A programming language built in Go, offering compilation with QBE, direct interpretation, and transpilation to multiple languages",
  },
  {
    name: "Discord Datamining",
    link: "https://github.com/xHyroM/discord-datamining",
    desc: "Repository offering datamining and analyzing web builds, host builds, articles, blog posts and discord's github",
  },
  {
    name: "hykord",
    link: "https://github.com/xHyroM/hykord",
    desc: "My @discord client modification. Currently out of date but prepare for a new version soon.",
  },
  {
    name: "links",
    link: "https://github.com/xHyroM/links",
    desc: "Modern and simple link tree. Built on top of Astro and TailwindCSS. Using Cloudflare Pages.",
    button: {
      name: "Goto",
      link: "https://links.xhyrom.dev",
    },
  },
  {
    name: "dakra",
    link: "https://github.com/xhyrom/dakra",
    desc: "A voice assistant built as a school project to make tasks easier.",
  },
  {
    name: "Mashe",
    link: "https://github.com/xHyroM/mashe",
    desc: "Simple event bus written in Java. Using LambdaMetafactory and also Reflections.",
  },
  {
    name: "Message Scraper",
    link: "https://github.com/xHyroM/message-scraper",
    desc: "Fast and versatile tool to extract discord channel messages into HTML, Markdown, or TXT.",
  },
  {
    name: "Peddler's Pocket",
    link: "https://github.com/xHyroM/peddlerspocket",
    desc: "A user-friendly plugin that makes the process of selling items easier and boosts your server's economy.",
    button: {
      link: "https://xhyrom.dev/docs/peddlerspocket",
    },
  },
  {
    name: "Time Control",
    link: "https://github.com/xhyrom/timecontrol",
    desc: "A modern mod that allows you to speed up, slow down and stop time using 3 items.",
  },
  {
    name: "Roomblom",
    link: "https://github.com/xHyroM/roomblom",
    desc: "Roomblom is a simple discord bot for music. Built on top of LavaPlayer, JDA and Kotlin.",
  },
  {
    name: "shortener",
    link: "https://github.com/xHyroM/shortener",
    desc: "Modern shortener using Astro, Svelte, TypeScript built on top of Cloudflare Pages, Page Functions, D1 and KV",
  },
] as {
  name: string;
  link: string;
  desc: string;
  button?: {
    name: string;
    link: string;
  };
  stats?: {
    forks: number;
    stars: number;
  };
}[];
