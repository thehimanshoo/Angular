import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models/IUser';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  public user:IUser = {
    username : '',
    email : '',
    password : '',
    course : ''
  };
  public isEmpty:boolean;
  public message:string;
  public isSubmitted:boolean;
  public courses:string[] = ['Angular' , 'React JS' , 'Ionic' , 'React Native'];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  public submitEnroll(){
    let {username , email ,password , course} = this.user;
    if(username !== '' && email !== '' && password !== '' && course !== ''){
        this.isEmpty = false;
        this.userService.enroll(this.user).subscribe((data) => {
          this.message = data.msg;
          this.isSubmitted = true;
        });
    }
    else {
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }

}
