class LocalCache {
  get(key: string) {
    const value = localStorage.getItem(key)

    if (value) {
      return JSON.parse(value)
    }
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  del(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

export default new LocalCache()
