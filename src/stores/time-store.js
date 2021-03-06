import { writable, readable } from 'svelte/store'
import { mouthIndex, year, day, mouthIndex as mouth } from '../utils/time.js'
import { getLocalStorage } from '../utils/local-storage.js'
const url = window.location.href
export const currentMonth = writable(mouthIndex)
export const currentYear = writable(year)
export const currentDay = readable(`${day}/${mouth + 1}/${year}`)
export const currentCalendarSection = writable('Year')
console.log(url.split('/')[6])