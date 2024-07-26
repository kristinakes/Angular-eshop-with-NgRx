import { cartItem } from "./cartItem.model";

export class cartState {
  constructor(
    public items: cartItem[],
    public totalAmount: number,
    public totalQuantity: number
  ) {}
}
