export const padWith = (arr: string[], len: number = 5, elem: string = 'N') => {
  for (let i = 0; i < len; i++) {
    if (!arr[i]) { arr.push(elem) }
  }
  return arr
}

export const hexToDec = (hex: string) => {
  if (hex === 'N') {
    return 'N'
  }
  return [parseInt(hex.substr(1, 2), 16), parseInt(hex.substr(3, 2), 16), parseInt(hex.substr(5, 2), 16)]
}

export const validateInput = (input: string[]) => {
  if (!input || input.length > 5) {
    throw new Error('Input array cannot be undefined, null or longer than 5 strings.')
  }
  input.forEach((inp: string) => {
    if (inp !== 'N' && !inp.match(/^#([a-f]|\d){6}$/)) {
      throw new Error('Input colors have to be of format "#a1a1a1"')
    }
  })
}
