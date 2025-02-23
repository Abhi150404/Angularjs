import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
  // simpleInterest: number = 0;
  // compoundInterest: number = 0;
  // showPopup: boolean = false;
  // fade: boolean = false;

  // // Function to calculate Simple and Compound Interest after validation
  // calculate(principal: string, rate: string, time: string) {
  //   if (this.checkValidation(principal, rate, time)) {
  //     const P = parseFloat(principal);
  //     const R = parseFloat(rate);
  //     const T = parseFloat(time);

  //     this.simpleInterest = (P * R * T) / 100;
  //     this.compoundInterest = P * (Math.pow((1 + R / 100), T)) - P;

  //     this.showPopup = true;
  //     this.fade = false; // Ensure popup appears without fading initially
  //   }
  // }

  // // Validation function for input values
  // checkValidation(principal: string, rate: string, time: string): boolean {
  //   if (!principal || isNaN(parseFloat(principal)) || parseFloat(principal) <= 0) {
  //     alert('Please enter a valid principal amount.');
  //     return false;
  //   }
  //   if (!rate || isNaN(parseFloat(rate)) || parseFloat(rate) <= 0) {
  //     alert('Please enter a valid interest rate.');
  //     return false;
  //   }
  //   if (!time || isNaN(parseFloat(time)) || parseFloat(time) <= 0) {
  //     alert('Please enter a valid time period.');
  //     return false;
  //   }
  //   return true;
  // }

  // On focus functionality to fade out the result popup
  // fadePopup() {
  //   if (this.showPopup) {
  //     this.fade = true; // Add a fade effect
  //     setTimeout(() => {
  //       this.showPopup = false;
  //     }, 500); // Fade out after 0.5s
  //   }
  // }
