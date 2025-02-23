import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent  {
 
  data =[
    {
      id:1,
      name:'Abhishek Sharma',
      Qualification:'BTECH',
      city:'Rishikesh',
      dob:12-12-2012,
      fee:50000,
    },
    {
      id:2,
      name:'Amit Rawat',
      Qualification:'MTECH',
      city:'Pune',
      dob:12-11-2012,
      fee:60000,
    },
    {
      id:3,
      name:'Arun Bhaskar',
      Qualification:'BTECH',
      city:'Rishikesh',
      dob:12-8-2012,
      fee:56000,

    },
    {
      id:4,
      name:'Akhilesh Rana',
      Qualification:'BA',
      city:'Delhi',
      dob:12-1-2012,
      fee:40000,

    }
  ]

  amount: number | null = null;
  amountInWords: string = '';
  private ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];
  private teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'
  ];
  private tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  private thousands = ['', 'thousand', 'million', 'billion'];
   // Method to convert the amount to words on button click
   convertAmountToWords() {
    if (this.amount !== null) {
      this.amountInWords = this.numberToWords(this.amount);
    } else {
      this.amountInWords = '';
    }
  }
  numberToWords(value: number): string {
    if (value === 0) return 'zero';
      if (value < 0) return 'minus ' + this.convertNumberToWords(Math.abs(value));
      return this.convertNumberToWords(value);
    }
    private convertNumberToWords(num: number): string {
      if (num === 0) return '';
      let words = '';
      let chunkCount = 0;
      
  
      while (num > 0) {
        const chunk = num % 1000;
        if (chunk !== 0) {
          words = this.chunkToWords(chunk) + ' ' + this.thousands[chunkCount] + ' ' + words;
        }
        num = Math.floor(num / 1000);
        chunkCount++;
        
      }
      
      return words.trim();
    }
    private chunkToWords(chunk: number): string {
      let words = '';
  
      if (chunk >= 100) {
        words += this.ones[Math.floor(chunk / 100)] + ' hundred ';
        chunk %= 100;
      }
      
  
      if (chunk >= 10 && chunk < 20) {
        words += this.teens[chunk - 10] + ' ';
      } else if (chunk >= 20) {
        words += this.tens[Math.floor(chunk / 10)] + ' ';
        chunk %= 10;
      }
  
      if (chunk > 0 && chunk < 10) {
        words += this.ones[chunk] + ' ';
      }
      console.log(words);
      return words.trim();

    }

  }

  

 
  // @ViewChild('p') principle:any
  // @ViewChild('r') rate:any
  // @ViewChild('t') time:any
  //@ViewChild('t1') txt:any

  // p:any
  // r:any
  // t:any
  // ci=0
  // si=0

  //error=''
  // a:number =1;
  // ngOnInit(): void {
  //   console.log('Abhishek')
  // }
  //ngAfterViewInit(){
    // this.p =this.principle.nativeElement
    // this.r = this.rate.nativeElement
    // this.t=this.time.nativeElement
  
  // changeDay(){
  //   this.a=parseInt(this.txt.nativeElement.value);
  // }

  // clearError(){
  //   this.error=''
  // }

  // checkValidation()
  // {
  //   if(this.p.value=='')
  //   {
  //     this.error = 'Enter Principle value'
  //     this.p.focus()
  //   }

  //   else if(isNaN(this.p.value))
  //   {
  //     this.error = 'Enter Numeric Value in Principle'
  //   this.p.focus()
  //   }

  //   else if(this.r.value=='')
  //     {
  //     this.error = 'Enter Rate'
  //     this.p.focus()
  //   }

  //   else if(isNaN(this.r.value))
  //     {
  //       this.error = 'Enter Numeric Value in rate'
  //     this.r.focus()
  //     }

     
  //     else if(this.t.value=='')
  //       {
  //       this.error = 'Enter Time'
  //       this.t.focus()
  //     }


  //     else if(isNaN(this.t.value))
  //       {
  //         this.error = 'Enter Numeric Value in Year'
  //       this.t.focus()
  //       }


  //       else{
  //         this.si=this.simple_intrest(this.p.value,this.r.value,this.t.value)
  //         this.ci=this.compound_intrest(this.p.value,this.r.value,this.t.value)
  //       }

  // }

  // simple_intrest(p:number,r:number,t:number){
  //   return (p*r*t)/100
   
  // }

  // compound_intrest(p:number,r:number,t:number){
  //   let ac = p*Math.pow((1+r/100),t)
  //   return Math.round(ac-p)
  // }
  

