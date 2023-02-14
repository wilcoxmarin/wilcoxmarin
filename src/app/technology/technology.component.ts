import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  tecnologias: any[] = [];
  versiones: any[] = []

  ngOnInit(): void {
    this.cargarTecnologias();
  }

  cargarTecnologias(): void{
    this.tecnologias = [
      {
        nombre: "JavaScript",
        path:"../../assets/imgs/icons/tecnologias/js.svg"
      },
      {
        nombre: "Angular",
        path:"../../assets/imgs/icons/tecnologias/angular.svg"
      },
      {
        nombre: "Node Js",
        path:"../../assets/imgs/icons/tecnologias/nodejs.svg"
      },
      {
        nombre: "TypeScript",
        path:"../../assets/imgs/icons/tecnologias/typescript.svg"
      },
      {
        nombre: "Vue JS",
        path:"../../assets/imgs/icons/tecnologias/vue.svg"
      },
      {
        nombre: "Css",
        path:"../../assets/imgs/icons/tecnologias/css.svg"
      },
      {
        nombre: "Html",
        path:"../../assets/imgs/icons/tecnologias/html.svg"
      },
      {
        nombre: "Ionic",
        path:"../../assets/imgs/icons/tecnologias/ionic.svg"
      }
    ];

    this.versiones = [
      {
        nombre: "GitHub",
        path:"../../assets/imgs/icons/tecnologias/github.svg"
      },
      {
        nombre: "GitLab",
        path:"../../assets/imgs/icons/tecnologias/gitlab.svg"
      },
      {
        nombre: "Azure DevOps",
        path:"../../assets/imgs/icons/tecnologias/azure.svg"
      }
    ]
  }

}
