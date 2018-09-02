/**
 * LRU (Least Recently Used) Cache with a limit
 */
export class LRUCache<T = string> {
  private cache: Map<string, T>;
  private queue: string[];

  constructor(public limit: number) {
    this.cache = new Map();
    this.queue = [];
  }

  public get(key: string): T | undefined {
    if (this.cache.has(key)) {
      const index = this.queue.findIndex((k) => k === key);
      if (index !== -1) {
        this.queue.splice(index, 1);
        this.queue.push(key);
      }
    }
    return this.cache.get(key);
  }

  public set(key: string, value: T): void {
    if (!this.cache.has(key)) {
      if (this.cache.size >= this.limit) {
        const oldestKey = this.queue.shift();
        this.cache.delete(oldestKey!);
      }
      this.queue.push(key);
    }
    this.cache.set(key, value);
  }

  public toArray(): Array<{ [key: string]: T }> {
    return Array.from(this.cache)
      .sort(([keyA], [keyB]) => this.queue.indexOf(keyA) - this.queue.indexOf(keyB))
      .map(([key, value]) => {
        const item: { [key: string]: T } = {};
        item[key] = value;
        return item;
      });
  }

  public get size() {
    return this.cache.size;
  }
}
