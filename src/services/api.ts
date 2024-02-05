import axios from 'axios'

let token: string | null

function getSessionToken() {
  token = sessionStorage.getItem('token')
}

getSessionToken()

export const api = axios.create({
  baseURL: 'https://orangeportfoliosquad32.software',
  headers: {
    Authorization: `Bearer ${token!}`,
  },
})
