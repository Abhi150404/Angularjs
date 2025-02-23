import { Component,ViewChild,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'First';
  // website_name ='Abhishek Sharma';


  // abc(ab: any){
  //   let txt =  ab.value
  //   this.website_name=txt
  //   ab.style.background ='blue'
  // }

  // iseven(xyz: any){
  //   let txt = xyz.value
  //   if(txt%2==0){
  //     alert("even!")
  //   }
  //   else{
  //     alert("Odd!")
  //   }
  // }
  @ViewChild('p') principle:any
    @ViewChild('r') rate:any
      @ViewChild('t') time:any
      @ViewChild('total_num') total_num: any

      p:any
      r:any
      t:any
      tn :any

      error='';

      ngOnInit(): void{
      console.log("JavaScript Rocks!")
      
      }
      ngAfterViewInit(){
      this.p= this.principle.nativeElement;
      this.r= this.rate.nativeElement;
      this.t= this.time.nativeElement;
      
      }

      clearError(){
      this.error=''
      }

      checkValidation(){
      if(this.p.value==''){
      this.error='Enter Principle value';
      this.p.focus();
      }
      else if(isNaN(this.p.value)){
      this.error ='Enter Numeric Value in Principle';
      this.p.focus();
      }

        else if(isNaN(this.r.value)){
      this.error ='Enter Numeric Value in rate';
      this.r.focus();
      }

        else if(isNaN(this.t.value)){
      this.error ='Enter Numeric Value in year';
      this.t.focus();
      }
      else{
    
        for (let i = 1; i <= this.t; i++) {
            let totalAmount = this.p * Math.pow(1 + this.r, i);
            this.tn.append(i + ': ₹' + totalAmount.toFixed(2));
            

        }  
      }

      }
}
