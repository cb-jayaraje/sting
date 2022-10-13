import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonComponent } from "./common.component";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        // DropdownDirective
        CommonComponent
    ],
    exports: [
        // DropdownDirective
        CommonComponent
    ]
})

export class commonComponentModule {

}