import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA3MDY4NTQ4LCJleHAiOjE3MDcxNTQ5NDh9.xsK-oY-AfXhKINS_a9TibFzUhamYynQmD1S5D41a-cc'

export const api = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
