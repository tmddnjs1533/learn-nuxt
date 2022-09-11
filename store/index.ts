import { ActionTree, MutationTree } from 'vuex'
import { IProduct } from '~/api/model'
import { fetchCartItems } from '~/api'

export const state = () => ({
  cartItems: [] as IProduct[]
})

// constants
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const SET_CART_ITEMS = 'SET_CART_ITEMS'
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  [ADD_CART_ITEM](state, cartItem: IProduct) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  [SET_CART_ITEMS](state, cartItems: IProduct[]) {
    state.cartItems = cartItems
  }
}
export const actions: ActionTree<RootState, RootState> = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    // console.log(response)
    commit(
      SET_CART_ITEMS,
      data.map((item: IProduct) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    )
  }
}
// export const getters: GetterTree<RootState, RootState> = {
//   name: state => state.name,
// }
//
// export const mutations: MutationTree<RootState> = {
//   CHANGE_NAME: (state, newName: string) => (state.name = newName),
// }
//
// export const actions: ActionTree<RootState, RootState> = {
//   async fetchThings({ commit }) {
//     const things = await this.$axios.$get('/things')
//     console.log(things)
//     commit('CHANGE_NAME', 'New name')
//   },
// }
