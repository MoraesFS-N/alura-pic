import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl : './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserNotTakenValidatorService ]
})

export class SignUpComponent implements OnInit{

   signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignUpService,
    private router: Router
  ){}

  ngOnInit(): void {

     this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      fullName: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(40)
        ]
      ],
      userName: ['', [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(6),
        Validators.maxLength(30)
        ],
        [this.userNotTakenValidatorService.checkUserNameTaken()]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
        ]
      ]
    })

  }


  signup(){

    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
        .signup(newUser)
        .subscribe(
           () => this.router.navigate(['']),
           err => console.log(err)
        )
  }

}
