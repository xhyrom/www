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

class TextScramblerWithImage extends HTMLElement {
  private chars: string = "!<>-_\\/[]{}—=+*^?#_";
  private queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[] = [];
  private frame: number = 0;
  private frameRequest: number = 0;
  private resolve: (() => void) | null = null;

  private names: string[] = [];
  private currentIndex: number = 0;

  private image?: HTMLElement;

  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  connectedCallback() {
    const attr = this.getAttribute("names");
    if (attr) {
      this.names = attr.split(",").map((n) => n.trim());
    }

    if (this.names.length === 0) {
      this.names = [this.textContent?.trim() || ""];
    }

    this.textContent = this.names[0];

    const imageId = this.getAttribute("image-card-id");
    if (imageId) this.image = document.getElementById(imageId) ?? undefined;

    if (this.names.length > 1) {
      this.startCycleOnce();
    }
  }

  private startCycleOnce() {
    const holdDuration = parseInt(this.getAttribute("hold") || "1800", 10);
    const initialDelay = parseInt(this.getAttribute("delay") || "500", 10);

    setTimeout(() => {
      this.cycleNextName(holdDuration);
    }, initialDelay);
  }

  private cycleNextName(holdDuration: number) {
    this.currentIndex++;
    if (this.currentIndex >= this.names.length) {
      this.currentIndex = 0;

      this.flipImage();
      this.setText(this.names[0]);
      return;
    }

    this.flipImage();
    this.setText(this.names[this.currentIndex]).then(() => {
      setTimeout(() => this.cycleNextName(holdDuration), holdDuration);
    });
  }

  private flipImage() {
    if (!this.image) return;

    this.image.style.transform =
      this.image.style.transform === "rotateY(180deg)"
        ? "rotateY(0deg)"
        : "rotateY(180deg)";
  }

  public nextName(): void {
    this.currentIndex = (this.currentIndex + 1) % this.names.length;
    this.setText(this.names[this.currentIndex]);
    this.flipImage();
  }

  public setText(newText: string): Promise<void> {
    const oldText = this.textContent || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    return promise;
  }

  private update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span>${char}</span>`;
      } else {
        output += from;
      }
    }

    this.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve?.();
      this.resolve = null;
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

customElements.define("text-scrambler-with-image", TextScramblerWithImage);
