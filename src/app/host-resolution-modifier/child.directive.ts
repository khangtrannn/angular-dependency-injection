import { Directive, Host } from "@angular/core";
import { LoggerService } from "../logger.service";

/**
 * <div appParent>
 *  <div appChild></div>
 * </div>
 * 
 * Resolve dependency flow
 * - Default behavior:
 * appChild ---> appParent ---> ModuleInjector
 * 
 * - @Host() behavior
 * Because appParent is host component of appChild, so the resolution of appChild injector scope 
 * is restricted to appParent. In other words, if appParent doesn't provide a dependency that
 * appChild request, we will end up with 'No provider' error
 * appChild ---> appParent xxx STOP xxx ModuleInjector
 */

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {
  constructor(@Host() private logger: LoggerService) {
    this.logger.log('directive constructor');
  }
}