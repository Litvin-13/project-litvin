import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { __values } from 'tslib';

interface IUser{
  name:string|AbstractControl
  password:string|AbstractControl,
}

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  passwordNewValid:ValidatorFn = (control:AbstractControl):ValidationErrors|null=>{
    return control.value.regPassword===control.value.regPassword2?null:{PasswordError:true};
  }

  passwordsValid:ValidatorFn = (control:AbstractControl):ValidationErrors|null=>{
    return control.value.length>10?null:{PasswordLength:true};
  }

  authForm:FormGroup = new FormGroup({
    'regName': new FormControl('',[]),
    'regPassword': new FormControl('',[this.passwordsValid]),
    'regPassword2': new FormControl('',[this.passwordsValid]),
    'userName': new FormControl('',[]),
    'userPassword': new FormControl('',[this.passwordsValid]),
  },this.passwordNewValid)

  regName=this.authForm.controls['regName']
  regPassword=this.authForm.controls['regPassword']
  regPassword2=this.authForm.controls['regPassword2']
  userName=this.authForm.controls['userName']
  userPassword=this.authForm.controls['userPassword']

  newUser:IUser = {
    name:'',
    password:''
  }
  addNewUser(){    
    this.newUser={
      name:this.authForm.controls['regName'],
      password:this.regPassword,
    }  
    console.log(this.newUser)
  }

  enterUser(){

  }

}
