import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ManagaedataService {
  load_data='https://dummyjson.com/products'

  constructor() { }
 async get_data(){
  let res =  await axios.get(this.load_data);
 return res.data.products //key = products

  }
}
