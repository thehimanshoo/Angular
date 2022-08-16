import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  public timer:number = 0;
  public timerId:number;
  public timerRunning:boolean = false;
  public minutes:number = 0;
  public seconds:number = 0;
  public milliSeconds:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // start
  public start(){
    if(!this.timerRunning){
      this.timerId = setInterval(() => {
        this.timer = this.timer + 1;
        this.minutes = Math.floor((this.timer/100)/60);
        this.seconds = Math.floor((this.timer/100) - (this.minutes * 60));
        this.milliSeconds = Math.floor(this.timer- (this.seconds * 100) - (this.minutes * 6000));
      } , 10);
      this.timerRunning = true;
    }
  }

  // stop
  public stop(){
    clearInterval(this.timerId);
    this.timerRunning = false;
  }

  // reset
  public reset(){
    clearInterval(this.timerId);
    this.timerRunning = false;
    this.timerId = 0;
    this.timer = 0;
    this.minutes = 0;
    this.milliSeconds = 0;
    this.seconds = 0;
  }

  public leadingZero(time){
    //return time <= 9 ? '0' + time : time
    if(time <= 9){
      return '0' + time;
    }
    else{
      return  time;
    }
  }

}
