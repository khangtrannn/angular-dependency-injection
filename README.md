Reference https://blog.angular-university.io/angular-dependency-injection/

## Resolution modifiers
Resolution modifiers Resolution modifiers it's some special annotations which allow you to slightly change the logic of how Angular resolves dependency in the injectors tree

#### @Self() 
Self tries to resolve dependency only only in its ow injector and it will not be asking the parent and go up through the injector tree until it finds the provider. It checks only its own injector and if it cannot resolve it there, it will throw the error. In order to fix it we have to provide dependency in component which declares this dependency.

We also can use @Self() for AppModule All eagerly imported modules share their root module injector and our @Self() annotation will point out to exactly root injector

#### @SkipSelf() 
@SkipSelf() does just opposite thing to @Self(), it just skips injector where it was declared and results dependencies starting from its parent.

#### @Host() 
@Host() resolution modifier tells Angular that the host element should be the last stop when it is searching for providers 
Example: parent.directive.ts & child.directive.ts

Every Angular component has its own Host-Element and it is represented by component's selector


## Dependency Providers
#### What are difference between useValue and useFactory?
Reference app-use-factory comment

#### Multiple providers multi: true
Have you ever wondered what will happen if in 'providers' we provide one more different service for the same token?
Refer to multi-providers.component.ts

If we simply configure multiple different services for the same token, the answer is the last one will be applied. Otherwise, if multi: true, the array of providers will be returned.

How can we use multi providers in the real case?
Refer to multi-providers-show-use

## Few words about Typescript
Interfaces are syntactic sugar in Typescript that are thrown away during compilation.

## Inject function
Solving inheritance case
@Directive()
export abstract class WidgetBase {
  protected dataProvider = inject(WidgetDataService);
  protected settings = inject(WidgetSettingsService);
}

export class InteractiveWidgetComponent extends WidgetBase {
  constructor(private actions: WidgetActionsService) {
    super();
  }
}

Note: we cannot use inject function the following ways
// will work - executed during constructor phrase
userService = inject(UserService);

ngOnInit() {
  // won't work - executed later
  inject(TestService).someValue;
}

someMethod {
  // won't work - executed later
  inject(TestService).someValue;
}

ERROR Error: NG0203: inject() must be called from an injection conext such as as a constructor, a factory, a filed initializer...

## ForRoot & ForChild
Fix the issue singleton for provider before Angular 6 (@Injectable({ providedIn: 'root' }))

## ForwardRef

## Few words about providedIn: root
- The service will be available application wide as a singleton with no need to add it to a module's providers array
- If the service is only used within a lazy loaded module it will be lazy loaded with that module
- If it is never used it will not be contained in the build (tree shaked).
- providedIn: 'root' specifies that the service should be provided in the root injector
- providedIn: 'root' is essentially the same as just adding the service at the app.module level in the providers array. However, it was easy to forget to add this entry and an unnecessary extra step.
Reference:
https://angular.io/guide/providers
https://angular.io/guide/singleton-services


## AngularAir - Dependency Injection in Angular with Dmytro Mezhenskyi
Reference: https://www.youtube.com/watch?v=bSRO73xmFQ8

SOLID principles

DI - Just a Pattern
Which implements "Inversion of Control (IoC)" and Dependency Inversion (DIP) Design principles

Inversion of Control
Design principle which allows to achieve loose coupling by inversion of different kind of controls

Dependency Inversion
High-level modules should not depend on low level modules. Both should depend on abstraction

#### The Problem
class Wheel {}
class LeatherWheel extends Wheel {}

class Car {
  wheel: Wheel;

  constructor() {
    // Here we depend on some concrete Wheel implementation, so we cannot replace it on runtime
    // Violates Single Responsibility  (our car also responsible for creating the wheel)
    // Not Flexible (we cannot replace the implementation of the wheel)
    // Hard or imposible to test
    this.wheel = new Wheel();
  }
}

#### The Solution
We delegate the creation of our concrete wheel to some external source

class Wheel {}
class LeatherWheel extends Wheel {}

class Car {
  wheel: Wheel;

  constructor(wheel: Wheel) {
    this.wheel = wheel;
  }
}

const car = new Car(new LeatherWheel());

#### Dependency Injection
Client
class CarComponent {
  constructor(private wheel: WheelService) {
    this.wheel.run();
  }
}

Injector (simplified version of what Angular uses)
class Injector {
  _records = new Map();

  constructor(tokens: any[]) {
    tokens.forEach(token => this._resords.set(token, new token()));
  }

  get(token: any) {
    return this._records.get(token);
  }
}

Service
class WheelService {
  turn() {
    /* do something */
  }
}

Usage
// create injector and register service
const injector = new Injector([WheelService]);

// Exactly this is the implementation of dependency inversion principle
// High level module should not depend on the low level, they should depend
// on the abstraction and "injector" here it's exactly this abstraction which abstract
// the concrete wheel service from our car component which is high level module
const comp = new CarComponent(injector.get(WheelService));
console.log(comp); // CarComponent { wheel: WheelService }


#### Hierarchical Dependency Injection in Angular
Module Hierarchical & Node Hierarchical

- Child Injector
This Injector is being created for every lazy-loaded module

- Root Injector
Services which were configured in non-lazy @ngModule and in @Injectable() annotations
@Injectable({
  providedIn: 'root',
})
export class UserService {}

@NgModule({
  providers: [UserService]
  ...
})
export class AppModule {}

- Platform Module
Created when we call method platformBrowserDynamic()
platformBrowserDynamic().boostrapModule(AppModule).then((ref) => {
  ...
});

- NullInjector
It throws error if Angular tries to find servie here

---

- Node Injector
Services which were configured in @Component() and in @Directive() annotations
@Component({
  selector: 'root',
  providers: [UserService],
  template: `<child-component></child-component>`
})
export class RootComponent {}

@Directive({
  selector: '[appSome]',
  providers: [UserService],
})
export class SomeDirective {}

- Child Node Injector
The Injector is a child injector for root component and parent Injector for Grand Child Component

@Component({
  selector: 'child-component',
  providers: [UserService],
  template: `<grand-child></grand-child>`
})
export class ChildComponent {}

- Grand Child Node Injector
This Injector is a child Injector for child-component

@Component({
  selector: 'grand-child-component',
  providers: [UserService]
})
export class GrandChildComponent {}


#### How Angular resolves dependencies


#### Resolution Modifiers
- @Self()
@Self tells Angular only check inside local injector and if there is no provider here - throw the error. It doesn't traverse injectors tree.

- @SkipSelf()
@SkipSelf tells Angular that it should skip local injector and start traversing of injector tree from parent injector

- @Optional()
@Optional tells Angular that it should not throw the error if there is no provider and just returns NULL

- @Host()
@Host tells Angular that it should resolve dependencies in scope of current component view. It is applicable mostly for directives.

View of some component
<form [formGroup]="form">
  <input customFormControl [formControl]="formControl" />
</form>

@Directive({
  selector: 'customFormControl'
})
export class CustomFormControlDirective {
  @Input()
  formControl: any;

  constructor(@Host() @Optional() private formGroup: FormGroup) {
    if (!this.formGroup) {
      throw Error('Provide a form');
    }
  }
}