

export function calculateTIme(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = time - (minutes * 60)
  return `${minutes > 9 ? minutes : '0'+minutes}:${seconds > 9 ? seconds : '0' + seconds}`
}