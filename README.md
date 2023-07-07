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

## Few words about providedIn: root
- The service will be available application wide as a singleton with no need to add it to a module's providers array
- If the service is only used within a lazy loaded module it will be lazy loaded with that module
- If it is never used it will not be contained in the build (tree shaked).
- providedIn: 'root' specifies that the service should be provided in the root injector
- providedIn: 'root' is essentially the same as just adding the service at the app.module level in the providers array. However, it was easy to forget to add this entry and an unnecessary extra step.
Reference:
https://angular.io/guide/providers
https://angular.io/guide/singleton-services
