import axios from 'axios'
import { validateInput, padWith, hexToDec } from './utils'

const API_URL = 'http://colormind.io/api/'

const generate = async (input: string[] = [], model: 'ui' | 'default' = 'default'): Promise<string[]> => {
  validateInput(input)

  const response = await axios.post(API_URL, { model, input: padWith(input).map(hexToDec) })
  return response
    .data
    .result
    .map((rgb: number[]) => rgb.map((x) => x.toString(16)).join(''))
    .map((str: string) => `#${str}`)
}

export default generate
