import { Component, OnInit } from '@angular/core';
import { FormdataService } from './MyService/formdata.service';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public alldata:any=[];
  constructor(private data: FormdataService){}
  title = 'FormHandling_Node';

  async savedata(FormData:any){
    let res = await this.data.savedata(FormData.value);
    if(res.includes('data save')){
     console.log(res);
    }

  
    
  }
}
