function Deprecate(
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor
) {
  throw new Error(`${propertyKey} is deprecated`);
}

class ProductItem {
  @Deprecate
  static setProductExpiry(years: number) {
    return true;
  }
}

ProductItem.setProductExpiry(3);
