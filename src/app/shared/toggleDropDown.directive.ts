import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appToggleDropdown]',
    
})

export class ToggleDropdownDirective {

    @HostBinding('class.open') isOpen = true;

    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //     console.log("click event", this.elRef.nativeElement)
    //     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // }

    @HostListener('click', ['$event']) toggleopen(event: Event) {
        console.log(event);
       this.isOpen = !this.isOpen;
     }

    constructor(private elRef: ElementRef) {
       // this.el.nativeElement.style.backgroundColor = 'yellow';
    }

}