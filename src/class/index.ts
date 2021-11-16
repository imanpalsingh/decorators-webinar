function freeze(constructor: Function) {
  Object.freeze(constructor);
}

@freeze
class Utility {
  static DbConnectionString = "Some Secret";
}

Utility.DbConnectionString = "someValue";
console.log(Utility.DbConnectionString);
