import { createReducer, on } from '@ngrx/store';
import { cartState } from '../../models/cartState.model';
import {
  addToCart,
  deleteItem,
  removeFromCart,
  updateItemInCart,
} from './cart.actions';
import { cartItem } from '../../models/cartItem.model';

const initialCartState: cartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => {
    const existingItemInCartIndex = state.items.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemInCartIndex === -1) {
      const updatedItems = [
        ...state.items,
        {
          id: product.id,
          title: product.title,
          image_url: product.image_url,
          price: product.price,
          year: product.year,
          RAM: product.RAM,
          warranty_period: product.warranty_period,
          quantity: 1,
          totalPrice: product.price,
        },
      ];
      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalPrice(updatedItems),
        totalQuantity: calculateTotalQuantity(updatedItems),
      };
    } else {
      const updatedItems = state.items.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + product.price,
          };
        } else {
          return { ...item };
        }
      });

      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalPrice(updatedItems),
        totalQuantity: calculateTotalQuantity(updatedItems),
      };
    }
  }),
  on(removeFromCart, (state, { productId }) => {
    const itemQuantityInCart = state.items.find(
      (item) => item.id === productId
    )?.quantity;

    //delete item from cart completly if quantity is 1
    if (itemQuantityInCart === 1) {
      const updatedItems = state.items.filter((item) => item.id !== productId);
      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalPrice(updatedItems),
        totalQuantity: calculateTotalQuantity(updatedItems),
      };
    } else {
      const updatedItems = state.items.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.price,
          };
        } else {
          return { ...item };
        }
      });

      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalPrice(updatedItems),
        totalQuantity: calculateTotalQuantity(updatedItems),
      };
    }
  }),
  on(deleteItem, (state, { productId }) => {
    const updatedItems = state.items.filter((item) => item.id !== productId);
    return {
      ...state,
      items: updatedItems,
      totalAmount: calculateTotalPrice(updatedItems),
      totalQuantity: calculateTotalQuantity(updatedItems),
    };
  }),
  on(updateItemInCart, (state, { updatedProduct, productId}) => {
    const itemIsInCart = state.items.findIndex(
      (item) => item.id === productId
    );

    if (itemIsInCart !== -1) {
      const updatedItems = state.items.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            title: updatedProduct.title,
            image_url: updatedProduct.image_url,
            price: updatedProduct.price,
            year: updatedProduct.year,
            RAM: updatedProduct.RAM,
            warranty_period: updatedProduct.warranty_period,
            totalPrice: updatedProduct.price * item.quantity,
          };
        } else {
          return { ...item };
        }
      });

      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalPrice(updatedItems),
        totalQuantity: calculateTotalQuantity(updatedItems),
      };
    } else {
      return state;
    }
  }),
);

//helper functions to calculate totals in cart
export function calculateTotalPrice(items: cartItem[]) {
  return items.reduce((total, item) => total + item.totalPrice, 0);
}

export function calculateTotalQuantity(items: cartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}
