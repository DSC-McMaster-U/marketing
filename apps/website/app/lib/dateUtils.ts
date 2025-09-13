export const formatDate = (date: string) => {
  const formattedDate = new Date(date)
  return formattedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const extractTime = (date: string, removeAMPM: boolean) => {
  const formattedDate = new Date(date)
  let timeString = formattedDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  if (removeAMPM) {
    timeString = timeString.replace(/\s?[APap][Mm]$/, '')
  }
  return timeString
}
