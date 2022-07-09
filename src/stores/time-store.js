import { writable, readable } from 'svelte/store'
import { mouthIndex, year, day, mouthIndex as mouth } from '../utils/time.js'

export const currentMonth = writable(mouthIndex)
export const currentYear = writable(year)
export const currentDay = readable(`${day}/${mouth+1}/${year}`)