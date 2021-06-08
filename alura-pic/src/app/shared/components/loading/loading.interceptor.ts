import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LoadingService } from "./loading.service";

@Injectable({
  providedIn: 'root'
})

export class LoadingInterceptor implements HttpInterceptor{

  constructor(
    private loadingService: LoadingService
  ) {}


  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpSentEvent |
  HttpResponse<any> |
  HttpHeaderResponse |
  HttpProgressEvent |
  HttpUserEvent<any>>{

    return next.handle(req)
      .pipe(tap(event => {
        if (event instanceof HttpResponse) {
          this.loadingService.stop();
        } else {
          this.loadingService.start();
        }
      }
    )
    )
  }


}
