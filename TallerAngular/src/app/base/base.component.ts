import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

// el que gane,
// si empata -> se va a penalti -> son 5 el mayor gana
// si se pasan de 5 pierde el primero q no lo meta


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  equipos: {}[] = [];
  cuartos: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  semifinal: number[] = [0, 0, 0, 0];
  posSemifinal: number[] = [0, 0, 0, 0];
  final: number[] = [0, 0];
  posFinal: number[] = [0, 0];
  finalista = 0;

  constructor(private _ds: DataService) {
    this.equipos = this._ds.equipos;

  }

  initEquipos(data) {
    const equipos: string[] = [];
    for (let i = 0; i < data.length; i++) {
      equipos.push(data[i].nombre);
    }

    return equipos;
  }

  ganadorGoles() {
    this.cuartosdeFinal();
    this.semifinales();


  }

  cuartosdeFinal() {
    let cont = 0;
    for (let i = 0; i < this.cuartos.length; i += 2) {
      cont++;
      const name = 'semi' + cont;
      const img = document.getElementById(name) as HTMLImageElement;
      const gol = document.getElementById(name + 'span');

      // cuartos
      if (cont < 3) {
        if (this.cuartos[i] > this.cuartos[i + 1]) {
          img.src = this._ds.data[i].imgIzq;
          gol.innerText = Math.round(Math.random() * 10) + '';
          this.semifinal[cont - 1] = +(gol.innerText);
          this.posSemifinal[cont - 1] = i;
        } else if (this.cuartos[i] < this.cuartos[i + 1]) {
          img.src = this._ds.data[i + 1].imgIzq;
          gol.innerText = Math.round(Math.random() * 10) + '';
          this.semifinal[cont - 1] = +(gol.innerText);
          this.posSemifinal[cont - 1] = i + 1;
        } else {
          img.src = this._ds.data[i].imgIzq;
          gol.innerText = Math.round(Math.random() * 10) + '';
          this.semifinal[cont - 1] = +(gol.innerText);
          this.posSemifinal[cont - 1] = i;
        }
      } else {
        if (this.cuartos[i] > this.cuartos[i + 1]) {
          img.src = this._ds.data[i].imgIzq;
          gol.innerText = Math.round(Math.random() * 10) + '';
          this.semifinal[cont - 1] = +(gol.innerText);
          this.posSemifinal[cont - 1] = i;
        } else if (this.cuartos[i] < this.cuartos[i + 1]) {
          img.src = this._ds.data[i + 1].imgIzq;
          gol.innerText = Math.round(Math.random() * 10) + '';
          this.semifinal[cont - 1] = +(gol.innerText);
          this.posSemifinal[cont - 1] = i + 1;
        } else {
          img.src = this._ds.data[i].imgIzq;
          gol.innerText = Math.round(Math.random() * 10) + '';
          this.semifinal[cont - 1] = +(gol.innerText);
          this.posSemifinal[cont - 1] = i;
        }
      }
    }
  }

  semifinales() {

    // semifinal
    const img1 = document.getElementById('fin1') as HTMLImageElement;
    const img2 = document.getElementById('fin2') as HTMLImageElement;
    const gol1 = document.getElementById('fin1span');
    const gol2 = document.getElementById('fin2span');


    if (this.semifinal[0] > this.semifinal[1]) {
      img1.src = this._ds.data[this.posSemifinal[0]].imgIzq;
      gol1.innerText = Math.round(Math.random() * 10) + '';
    } else if (this.semifinal[0] < this.semifinal[1]) {
      img1.src = this._ds.data[this.posSemifinal[1]].imgIzq;
      gol1.innerText = Math.round(Math.random() * 10) + '';
    } else {
      img1.src = this._ds.data[this.posSemifinal[0]].imgIzq;
      gol1.innerText = Math.round(Math.random() * 10) + '';
    }

    if (this.semifinal[2] > this.semifinal[3]) {
      img2.src = this._ds.data[this.posSemifinal[2]].imgIzq;
      gol2.innerText = Math.round(Math.random() * 10) + '';
    } else if (this.semifinal[2] < this.semifinal[3]) {
      img2.src = this._ds.data[this.posSemifinal[3]].imgIzq;
      gol2.innerText = Math.round(Math.random() * 10) + '';
    } else {
      img2.src = this._ds.data[this.posSemifinal[2]].imgIzq;
      gol2.innerText = Math.round(Math.random() * 10) + '';
    }

    console.log(this.semifinal);
  }

  finales(){

  }

}


