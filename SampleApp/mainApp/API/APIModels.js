export class ProductLisResponseModel {
  constructor(data) {
    this.limit = data && data.limit ? data.limit : 0;
    this.skip = data && data.skip ? data.skip : 0;
    this.total = data && data.total ? data.total : 0;
    this.products = [];
    if (data && data.products) {
      this.products = data.products.map((item) => new ProductDetailsModel(item));
    }
  }
}

export class ProductDetailsModel {
    constructor(data) {
      this.id = data && data.id ? data.id : 0;
      this.price = data && data.price ? data.price : 0;
      this.discountPercentage = data && data.discountPercentage ? data.discountPercentage : 0;
      this.rating = data && data.rating ? data.rating : 0;
      this.stock = data && data.stock ? data.stock : 0;
      this.brand = data && data.brand ? data.brand : "";
      this.category = data && data.category ? data.category : "";
      this.description = data && data.description ? data.description : "";
      this.thumbnail = data && data.thumbnail ? data.thumbnail : "";
      this.title = data && data.title ? data.title : "";
      this.images = data && data.images ? data.images : [];
    }
  }
  