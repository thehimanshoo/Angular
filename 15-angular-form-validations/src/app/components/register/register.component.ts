import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UsernameValidator} from './validators/UsernameValidator';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public courses:string[] = ['Angular' , 'React JS' , 'Ionic' , 'React Native'];
  public isEmpty:boolean;
  public message:string;
  public isSubmitted:boolean;

  constructor(private formBuilder:FormBuilder,
              private userService:UserService) { }
  ngOnInit(): void {
  }

  public registrationForm = this.formBuilder.group({
      username : ['', [UsernameValidator.regExpValidator]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(5)]],
      course : ['', [Validators.required]]
  });

  public getUsername(){
    return this.registrationForm.get('username');
  }

  public getEmail(){
    return this.registrationForm.get('email');
  }

  public getPassword(){
    return this.registrationForm.get('password');
  }

  public getCourse(){
    return this.registrationForm.get('course');
  }

  // submitRegister
  public submitRegister(){
    let user = {
      username : this.getUsername().value,
      email : this.getEmail().value,
      password : this.getPassword().value,
      course : this.getCourse().value
    };
    if(user.username !== '' && user.email !== '' && user.password !== '' && user.course !== ''){
      this.isEmpty = false;
      this.userService.register(user).subscribe((data) => {
        this.message = data.msg;
        this.isSubmitted = true;
      });
    }
    else{
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }
}
