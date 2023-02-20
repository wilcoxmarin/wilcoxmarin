import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { responsive } from '../enums/responsive.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
    this.ancla();
  }

  initSizeWidth(): void {
    fromEvent(window, 'resize').subscribe((resp: any) => {
      this.size = window.innerWidth;
      this.sizeWidth();
    });
  }

  sizeWidth(): void {
    if (this.size >= 1025) {
      this.logo = './assets/imgs/logo/logo blanco horizontal.svg';
    } else {
      this.logo = './assets/imgs/logo/Icono en blanco.svg';
    }
  }

  openMenuMovile(): void {
    this.menuMovile = !this.menuMovile;
  }

  ancla() {
    const posicion = this;
    const listMenu = document.querySelectorAll('div ul li a');
    listMenu.forEach((t) => {
      t.addEventListener('click', function (e) {
        e.preventDefault();
        const href = t.getAttribute('href');
        if (href) {
          const section = document.querySelector(href);
          if (section){
            if (posicion.size <= 1025){
              posicion.openMenuMovile();
            }
            section.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}
