import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';


@NgModule({
  imports: [
            PhotoFormModule,
            PhotoListModule,
            PhotoModule,
            PhotoDetailsModule,
            RouterModule
  ],
  exports: [ PhotoComponent ],
})
export class PhotosModule {}
