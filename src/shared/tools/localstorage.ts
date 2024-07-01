

export const localstorage = {
  getItem(key: string) {
    const json = localStorage.getItem(key)
    return json? JSON.parse(json) : null
  },

  setItem<T>(key: string, data:T) {
    const jsonData = typeof data === 'object' ? JSON.stringify(data) : data
    localStorage.setItem(key, jsonData)
  }
}