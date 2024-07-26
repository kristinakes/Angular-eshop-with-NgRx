import { createAction, props } from "@ngrx/store";
import { cartItem } from "../../models/cartItem.model";
import { Product } from "../../models/product.model";

export const addToCart = createAction('Add item', props<{product: Product | cartItem}>());
export const removeFromCart = createAction(
  'Remove item',
  props<{ productId: number | string }>()
);
export const deleteItem = createAction(
  'Delete item',
  props<{ productId: number | string }>()
);
export const updateItemInCart = createAction(
  'Update item in cart',
  props<{ updatedProduct: Product | cartItem; productId: number | string }>()
);
