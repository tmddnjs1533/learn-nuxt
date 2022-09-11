import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

function fetchProductById(id: string) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword: string) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword
    }
  })
}

export { fetchProductById, fetchProductByKeyword }
