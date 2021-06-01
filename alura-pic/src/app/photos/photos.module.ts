import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';


@NgModule({
  imports: [
            PhotoFormModule,
            PhotoListModule,
            PhotoModule,
  ],
  exports: [ PhotoComponent ],
})
export class PhotosModule {}
