import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  public inputType:string = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  public showPassword(){
    (this.inputType === 'password') ? this.inputType = 'text' : this.inputType = 'password';

   /* if(this.inputType === 'password'){
      this.inputType = 'text';
    }
    else{
      this.inputType = 'password'
    }*/
  }

}
