function DeprecateWith(name: string) {
  return function (
    target: Object,
    propertyKey: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    throw `${propertyKey} is deprecated. Use ${name} instead`;
  };
}

class ProductCourse {
  static setCourseExpiry(years: number) {
    return true;
  }
}

ProductItem.setProductExpiry(3);
