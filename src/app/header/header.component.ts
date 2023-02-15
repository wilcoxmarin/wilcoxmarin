import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { responsive } from '../enums/responsive.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = '';
  size: number;
  menuMovile: boolean = false;
  widthSize: number = responsive.width;

  constructor() {
    this.size = window.innerWidth;
  }

  ngOnInit() {
    this.initSizeWidth();
    this.sizeWidth();
  }

  initSizeWidth(): void{
    fromEvent(window, 'resize').subscribe((resp:any) =>{
      console.log(window);

      this.size = window.innerWidth;
      this.sizeWidth();
    })
  }


  sizeWidth(): void{
    if (this.size >= 1025){
      this.logo = "./assets/imgs/logo/logo blanco horizontal.svg";
    } else {
      this.logo = "./assets/imgs/logo/Icono en blanco.svg";
    }
  }

  openMenuMovile(): void{
    this.menuMovile = !this.menuMovile;
  }

}
