import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  // @ViewChild('userPasswordInput') userPasswordInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams
      .subscribe(params => {
        this.fromUrl = params.fromUrl
      }
    );

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login(){

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {

          if (this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl);
          } else {
            this.router.navigate(['user', userName])
          }

          this.router.navigate(['user', userName])
          this.toast.success('Login Efetuado','Success')
        },
        (err) => {
          console.log(err);
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
          this.toast.error('Usuário ou senha incorretos', 'Error');
        }
     )
  }
}
