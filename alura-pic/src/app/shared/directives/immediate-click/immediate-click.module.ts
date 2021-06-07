import { ImmediateClickDirective } from './immediate-click.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ImmediateClickDirective],
  exports: [ImmediateClickDirective],
  imports: [CommonModule]
})
export class ImmediateClickModule{

}
