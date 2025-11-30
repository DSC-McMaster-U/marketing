// Safe localStorage access that works in SSR
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') {
      return null
    }
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') {
      return
    }
    try {
      window.localStorage.setItem(key, value)
    } catch {
      // Ignore errors
    }
  },
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') {
      return
    }
    try {
      window.localStorage.removeItem(key)
    } catch {
      // Ignore errors
    }
  },
}
