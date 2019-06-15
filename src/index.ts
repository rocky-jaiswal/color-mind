import axios from 'axios'

const API_URL = 'http://colormind.io/api/'

const generate = async (input: string[] = [], model: 'ui' | 'default' = 'default'): Promise<string[]> => {
  if (!input || input.length > 5) {
    throw new Error('Input array cannot be undefined, null or longer than 5 strings.')
  }
  const response = await axios.post(API_URL, { model, input: padWith(input).map(hexToDec) })
  return response
    .data
    .result
    .map((rgb: number[]) => rgb.map((x) => x.toString(16)).join(''))
    .map((str: string) => `#${str}`)
}

const padWith = (arr: string[], len: number = 5, elem: string = 'N') => {
  for (let i = 0; i < len; i++) {
    if (!arr[i]) { arr.push(elem) }
  }
  return arr
}

const hexToDec = (hex: string) => {
  if (hex === 'N') {
    return 'N'
  }
  if (hex.length !== 7) {
    throw new Error('Input colors have to be of format "#a1a1a1"')
  }

  const rgbs = [parseInt(hex.substr(1, 2), 16), parseInt(hex.substr(3, 2), 16), parseInt(hex.substr(5, 2), 16)]

  if (rgbs.filter((rgb: number) => isNaN(rgb)).length > 0) {
    throw new Error('Invalid hex color provided.')
  }
  return rgbs
}

export default generate
