import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA3MTY0NjY0LCJleHAiOjE3MDcyNTEwNjR9.at5GWSEb8WuYZuzVqZmxuJW8O8cynI7xPfKyoz7XO6g'

export const api = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
