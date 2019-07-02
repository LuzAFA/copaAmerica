import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	public data:any = [];
	equipos: {}[] = [];

  constructor(private http: HttpClient) {
  	this.loadData();
  }

  loadData(){
    
  	this.http.get('assets/data/equipos.json')
      .subscribe(res => {
        this.data = res;
        for (const eq of this.data) {
          this.equipos.push(eq["nombre"])
        }
      });
      
  }
}
