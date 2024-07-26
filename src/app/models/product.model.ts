export class Product {
  constructor(
    public id: number | string,
    public title: string,
    public image_url: string,
    public price: number,
    public short_description: string,
    public long_description: string,
    public year: number,
    public RAM: string,
    public warranty_period: string,
    public features: string[]
  ) {}
  }