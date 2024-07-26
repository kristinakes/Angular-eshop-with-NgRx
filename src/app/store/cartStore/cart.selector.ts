import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

//here is the slice of cart state.
export const selectCartState = (state: AppState) => state.cart;

//this is to create a slice of data to reuse in components. This selector is only for that value in cart state.
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);
export const selectCartAmount = createSelector(
  selectCartState,
  (state) => state.totalAmount
);
export const selectCartQuantity = createSelector(
  selectCartState,
  (state) => state.totalQuantity
);
export const selectCartItemByIdQuantity = (itemId: number | string) =>
  createSelector(selectCartState, (state) =>
    state.items.find((item) => item.id === itemId)?.quantity
  );
