import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2OTA2MDgzLCJleHAiOjE3MDY5MDk2ODN9.kAy2ccYq8i-8Rybo5byenhKq5voQqfqXXjt_f8OeLY0'

export const api = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
