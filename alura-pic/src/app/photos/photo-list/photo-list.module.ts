import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})

export class PhotoListModule{}
