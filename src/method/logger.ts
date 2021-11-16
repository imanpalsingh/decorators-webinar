function logger(
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    console.log("Function: ", propertyKey);
    console.log("Params: ", ...args);

    const result = original.call(this, ...args);

    console.log(`Returned:`, result);
    return result;
  };
}

class ApplicationSettings {
  static tokenResolver(token: string) {
    return "###-***";
  }
}

ApplicationSettings.tokenResolver("connectionString");
