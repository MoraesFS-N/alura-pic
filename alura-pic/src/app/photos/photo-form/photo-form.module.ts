import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessagem.module';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule
  ],
  exports: [
    PhotoFormComponent
  ]
})
export class PhotoFormModule {

}
