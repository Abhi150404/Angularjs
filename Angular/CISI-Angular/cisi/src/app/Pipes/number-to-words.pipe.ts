import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  
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

    transform(value: number): string {
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
  
      return words.trim();
    }
   
  

}
