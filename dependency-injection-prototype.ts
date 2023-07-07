class UserService {
  sayHi(): void {
    console.log('Hi!');
  }
}

class Component {
  constructor(public user: UserService) {}
}

// "Angular" DI

class Injector {
  private _containers = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._containers.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._containers.get(service);

    if (!serviceInstance) {
      throw Error('No provider found!');
    }

    return serviceInstance;
  }
}

/**
 * Somewhere in application
 * When Angular starts it creates a root injector where we'll be registered our services which we provided via
 * injectable annotation and all services provided in NgModule
 */
const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
component.user.sayHi();
