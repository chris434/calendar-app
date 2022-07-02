import { writable } from 'svelte/store';

export const toggles = writable({ loginToggle: false, nameToggle: false, menuToggle: false, })
let togglesValue
toggles.subscribe(value => {
    togglesValue = value
})

export const updateToggle = (e) => {
    let newToggles = {}

    const { id: toggle } = e.target
    const togglesCopy = Object.keys(togglesValue)
    if (togglesValue[toggle]) {
        newToggles = {...togglesValue, [toggle]: false }
        toggles.set(newToggles)
        return
    }

    togglesCopy.forEach((key) => {
        let toggleValue = false
        if (key === toggle) {
            toggleValue = true
        }
        newToggles = {...newToggles, [key]: toggleValue }
    })
    toggles.set(newToggles)
}