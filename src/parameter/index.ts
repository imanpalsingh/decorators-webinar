interface User {
  userId: string;
  isPremium: boolean;
}

class UserServices {
  @validate
  upgradeUser(@premium user: User) {
    console.log("User upgraded");
  }
}

/*-----------------------DECORATORS----------------------------------*/

function premium(
  target: Object,
  propertyKey: string | Symbol,
  parameterIndex: number
) {
  target["premium"] = target["premium"]
    ? [...target["premium"], parameterIndex]
    : [parameterIndex];
}

function validate(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const func = descriptor.value;

  descriptor.value = function () {
    const premiumParams = target["premium"] || [];
    for (let param of premiumParams) {
      const value: User = arguments[param];
      if (!value.isPremium) {
        throw new Error("User Should be premium");
      }
      func.call(this, arguments);
    }
  };
}

/*-------------------------------------------------------------*/

new UserServices().upgradeUser({ isPremium: false, userId: "" });
