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