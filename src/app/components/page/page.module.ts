import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SafeHtmlPipe } from "src/app/pipe/safe-html.pipe";
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { WithLabelComponent } from "./input-groups/with-label/with-label.component";
import { WithLabelHelpTextComponent } from './input-groups/with-label-help-text/with-label-help-text.component';
import { InputWithValidationErrorComponent } from './input-groups/input-with-validation-error/input-with-validation-error.component';
import { InputCommonComponent } from './input-groups/input-common/input-common.component';

@NgModule({
    declarations: [
    InputGroupsComponent,
        WithLabelComponent,
        WithLabelHelpTextComponent,
        InputWithValidationErrorComponent,
        InputCommonComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
        
        
        
    ],
    exports: [
        
    ]
})

export class PageModule {

}