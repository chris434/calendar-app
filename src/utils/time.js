export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"]
export const abbreviatedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const date = new Date();
export const year = date.getFullYear();
export const mouthIndex = date.getMonth();
export const mouthAndYear = `${months[mouthIndex]} ${year}`
export const day = date.getDate()
export const dayIndex = !date.getDay() ? 7 : date.getDay() + 1
export const lastDate = new Date(year, mouthIndex + 1, 0).getDate()
export const fullMonth = Array.from({ length: lastDate }, (_, i) => i + 1)

const getDayNumber = (day, month, year) => {
    return new Date(year, month, day).getDay()
}

export const getFullMonth = (month, year) => {
    const lastDate = new Date(year, month + 1, 0).getDate()
    return Array.from({ length: lastDate }, (_, i) => i + 1)
}

export const getFistIndex = (month, year) => {
    const dayNumber = getDayNumber(1, month, year)
    return !dayNumber ? 7 : dayNumber
}
export const isWeekend = (day, month, year) => {
    const dayNumber = getDayNumber(day, month, year)
    console.log(dayNumber)
    return dayNumber === 6 || !dayNumber ? true : false
}