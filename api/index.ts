import axios from 'axios'
import { IProduct } from '~/api/model'

const instance = axios.create({
  baseURL: process.env.baseURL
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

function createCartItem(cartItem: IProduct) {
  return instance.post('/carts', cartItem)
}

function fetchCartItems() {
  return instance.get('/carts')
}

export {
  fetchProductById,
  fetchProductByKeyword,
  createCartItem,
  fetchCartItems
}
