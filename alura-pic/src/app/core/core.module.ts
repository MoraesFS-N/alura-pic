import { ShowIfLoggedModule } from './../shared/directives/show-if-logged/show-if-logged.module';
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoadingModule } from "../shared/components/loading/loading.module";
import { MenuModule } from "../shared/components/menu/menu.module";
import { RequestInterceptor } from "./auth/request.interceptor";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, LoadingModule, MenuModule, ShowIfLoggedModule],
  exports: [HeaderComponent, FooterComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }]
})

export class CoreModule {
  constructor() {

  }
}
