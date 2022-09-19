import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appToggle]',
    
})


export class ToggleDirective {
    @HostBinding('class.active') isActive = true;

    @HostListener('click', ['$event']) toggleopen(event: Event) {
        // console.log("asdasd")
        console.log(event);
       this.isActive = !this.isActive;
     }

}