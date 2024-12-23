class LRUCache<T, U, V> {
  constructor() {}
}

type CacheFetchContext = {};

export class Cache extends LRUCache<
  CacheFetchContext,
  CacheFetchContext,
  CacheFetchContext
> {
  constructor() {
    super();
  }
}
