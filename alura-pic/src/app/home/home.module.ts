import { SignInComponent } from './signin/signin.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessagem.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VMessageModule, RouterModule]
})

export class HomeModule {}
