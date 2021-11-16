interface AuthProvider {
  isLoggedIn: boolean;
}

class AuthService implements AuthProvider {
  isLoggedIn = false;
}

const Services = {
  Authentication: new AuthService(),
};

/*---------------------------------------------------------*/

class LoginForm {
  @inject("Authentication") Auth: AuthProvider;

  render() {
    if (this.Auth.isLoggedIn) {
      console.log("Redirecting to Home page");
    } else {
      console.log("Showing Login Form");
    }
  }
}

/*------------DECORATORS-----------*/

function inject(service: string) {
  return function (target: Object, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      value: Services[service],
    });
  };
}
