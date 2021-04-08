import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class DOMPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
