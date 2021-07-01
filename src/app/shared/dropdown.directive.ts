/*import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{

    @HostBinding('class.open') isOpen=false; // here class is an array of classes . since we want to add
    @HostListener('click') toggleOpen(){               // open class using this directive we are specifying it.
        this.isOpen=!this.isOpen;
    }
}*/

// using this code we can close the dropdown by clicking anywhere on the webpage.
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;// event.target checks whether the targeted element
  }                                                                                       // is clicked. if click is on targeted element then isOpen is set to true,
  constructor(private elRef: ElementRef) {}                                               // and if click event happens anywhere else isOpen is set to false.
}