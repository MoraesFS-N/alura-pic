import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { RouterModule } from '@angular/router';
import { PhotoCommentComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessagem.module';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [ PhotoDetailsComponent,
                  PhotoCommentComponent,
                  PhotoOwnerOnlyDirective],

  exports: [PhotoDetailsComponent,
            PhotoCommentComponent],

  imports: [CommonModule,
            PhotoModule,
            RouterModule,
            ReactiveFormsModule,
            VMessageModule,
            ShowIfLoggedModule
  ],
})

export class PhotoDetailsModule {
  constructor() {}
}
