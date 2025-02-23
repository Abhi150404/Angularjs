import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  save_data_url ='save_data';

  constructor() { }
  async savedata(FormData:any){
    let res = await axios.post(this.save_data_url,FormData);
    return res.data;
  }
}
