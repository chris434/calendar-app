export const capFirstChar = (str) => {
    console.log(str)
    const firstChar = str[0]

    return str.replace(firstChar, firstChar.toUpperCase())
}