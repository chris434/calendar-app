export const getLocalStorage = (key) => {
    console.log(JSON.parse(localStorage.getItem(key)))
    return JSON.parse(localStorage.getItem(key))
}