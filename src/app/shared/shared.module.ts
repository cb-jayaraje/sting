import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonComponent } from "../components/page/common/common.component";
import { DropdownDirective } from "./dropdown.directive";
// import { ClickedOutsideDirective } from './click-outside/clicked-outside.directive';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        // DropdownDirective
     
    
    // ClickedOutsideDirective
  ],
    exports: [
        // DropdownDirective
      
    ]
})

export class SharedModule {

}