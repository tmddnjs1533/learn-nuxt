import { ActionTree, MutationTree } from 'vuex'
import { IProduct } from '~/api/model'
import { fetchCartItems } from '~/api'

export const state = () => ({
  cartItems: [] as IProduct[]
})

// constants
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const SET_CART_ITEMS = 'SET_CART_ITEMS'

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
  /**
   * nuxt ssr 에서 api 데이터를 가져와서 스토어 설정하는 함수
   * 호출하지 않아도 자동으로 실행됨.
   * @param storeContext : store Context
   * @param nuxtContext : 넉스트 Context
   */
  async nuxtServerInit({ commit }) {
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
