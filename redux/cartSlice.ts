import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "./store";

// Define a type for the slice state
interface CartState {
  items: Product[]
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      addToCart: (state: CartState, action: PayloadAction<Product>) => {
          state.items = [...state.items, action.payload ]
      },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Selectors -> retrieving items in state to use in different components
export const selectBasketItems = (state: RootState) => state.cart.items;
export const selectBasketItemsWithId = (state: RootState, id: String) => {
    state.cart.items.filter((item: Product)=> item._id == id )
}
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
export default cartSlice.reducer