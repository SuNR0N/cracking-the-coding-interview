import { LRUCache } from './lru-cache';

describe('LRUCache', () => {
  let lruCache: LRUCache;

  beforeEach(() => {
    lruCache = new LRUCache(3);
  });

  it('should be able to add a new item if the cache is empty', () => {
    lruCache.set('1', 'foo');

    expect(lruCache.toArray()).toEqual([
      { 1: 'foo' },
    ]);
    expect(lruCache.size).toBe(1);
  });

  it('should be able to add a new item if the cache has fewer items than its limit', () => {
    lruCache.set('1', 'foo');
    lruCache.set('2', 'bar');

    expect(lruCache.toArray()).toEqual([
      { 1: 'foo' },
      { 2: 'bar' },
    ]);
    expect(lruCache.size).toBe(2);
  });

  it('should remove the oldest item from the cache when adding a new while the limit of the queue is reached', () => {
    lruCache.set('1', 'foo');
    lruCache.set('2', 'bar');
    lruCache.set('3', 'foobar');
    lruCache.set('4', 'fool');

    expect(lruCache.toArray()).toEqual([
      { 2: 'bar' },
      { 3: 'foobar' },
      { 4: 'fool' },
    ]);
    expect(lruCache.size).toBe(3);
  });

  it('should move the accessed item to the end of the queue', () => {
    lruCache.set('1', 'foo');
    lruCache.set('2', 'bar');
    lruCache.set('3', 'foobar');
    lruCache.get('1');
    lruCache.set('4', 'fool');

    expect(lruCache.toArray()).toEqual([
      { 3: 'foobar' },
      { 1: 'foo' },
      { 4: 'fool' },
    ]);
    expect(lruCache.size).toBe(3);
  });
});
