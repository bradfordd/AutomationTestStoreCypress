export class CartProduct {
  constructor(productName, specifications, model, unitPrice, quantity, total) {
    this.productName = productName;
    this.specifications = specifications;
    this.model = model;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.total = total;
  }
  calculateTotal() {
    debugger;
    const price = parseFloat(this.unitPrice.replace("$", ""));
    return price * this.quantity;
  }

  toString() {
    return `{ ProductName: ${this.productName} \nSpecifications: ${this.specifications} \nModel: ${this.model} \nUnit Price: ${this.unitPrice} \nQuantity: ${this.quantity} \nTotal: ${this.total} }`;
  }
}
