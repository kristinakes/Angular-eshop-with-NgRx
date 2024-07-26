export class cartItem {
  constructor(
    public id: number | string,
    public title: string,
    public image_url: string,
    public price: number,
    public year: number,
    public RAM: string,
    public warranty_period: string,
    public totalPrice: number,
    public quantity: number
  ) {}
}
