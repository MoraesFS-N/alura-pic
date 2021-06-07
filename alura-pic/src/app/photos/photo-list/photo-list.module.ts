import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoModule } from "../photo/photo.module";
import { SearchComponent } from './search/search.component';
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from "./photo-list.component";
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { CoreModule } from "src/app/core/core.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenHoverModule,
    CoreModule,
    RouterModule
  ]
})

export class PhotoListModule{}
