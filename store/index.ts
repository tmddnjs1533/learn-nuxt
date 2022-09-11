import { MutationTree } from 'vuex'
import { IProduct } from '~/api/model'

export const state = () => ({
  cartItems: [] as IProduct[]
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  addCartItem(state, cartItem: IProduct) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
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
