class CartProduct {
  constructor(productName, specifications, model, unitPrice, quantity) {
    this.productName = productName;
    this.specifications = specifications;
    this.model = model;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.total = this.calculateTotal();
  }

  calculateTotal() {
    return this.unitPrice * this.quantity;
  }
}
