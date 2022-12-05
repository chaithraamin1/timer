import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timer';
  ngOnInit() {
    // let ms: any,sec: any,min: any,hr:any=0+"0";
    let ms:any=0+"0";
    let sec:any=0+"0";
    let min:any=0+"0";
    let hr:any=0+"0";

    let startTimer:any;

    const startBtn: any = document.querySelector(".start");
    const stopBtn: any = document.querySelector(".stop");
    const resetBtn: any = document.querySelector(".reset");

    startBtn.addEventListener("click", start);
    stopBtn.addEventListener("click", Stop);
    resetBtn.addEventListener("click", reset);

    function start() {
      debugger
      startBtn.classList.add('active');
      stopBtn.classList.remove('stopActive');

      startTimer = setInterval(() => {
        ms++;

        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
          sec++;
          sec = sec < 10 ? "0" + sec : sec;
          ms = "0" + 0;
         
        }
        if (sec == 60) {
          min++;
          min = min < 10 ? "0" + min : min;
          sec = "0" + 0;
         
        }
        if (min == 60) {
          hr++;
          hr = hr < 10 ? "0" + hr : hr;
          min = "0" + 0;
        }
        putValue();
      }, 10)
    }
    function Stop() {
      startBtn.classList.remove('active');
      stopBtn.classList.add('stopActive');
      clearInterval(startTimer);
    }
    function reset() {
      startBtn.classList.remove('active');
      stopBtn.classList.remove('stopActive');
      clearInterval(startTimer);
      hr=min=sec=ms="0" + 0 ;
      putValue();
    }
    function putValue() {
      debugger
      (document.querySelector(".millisecond") as any).innerText = ms;
      (document.querySelector(".second") as any).innerText = sec;
      (document.querySelector(".minute") as any).innerText = min;
      (document.querySelector(".hour") as any).innerText = hr ;
    }
  }
}
