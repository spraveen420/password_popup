import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) {}
  public forgotPasswordFormGroup: FormGroup;
  public hide = true;
  public passwordCheck = [ false, false, false, false ];
  public regexLength = /^[A-Za-z\d><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-+_]{8,15}$/;
  public regexLetter = /(?=.*[A-Za-z])/;
  public regexNumber = /(?=.*\d)/;
  public regexSpecialCharacter = /(?=.*[><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-+_])/;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.forgotPasswordFormGroup = this.fb.group({
      newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-+_])[A-Za-z\d><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-+_]{8,15}$/)]]
    });
  }

  popoverToggle(popover) {
    popover.open();
    this.passwordCheck[0] = this.regexLength.test(this.forgotPasswordFormGroup.controls.newPassword.value);
    this.passwordCheck[1] = this.regexLetter.test(this.forgotPasswordFormGroup.controls.newPassword.value);
    this.passwordCheck[2] = this.regexNumber.test(this.forgotPasswordFormGroup.controls.newPassword.value);
    this.passwordCheck[3] = this.regexSpecialCharacter.test(this.forgotPasswordFormGroup.controls.newPassword.value);
  }

  popoverOff(popover) {
    popover.close();
  }
  
}
