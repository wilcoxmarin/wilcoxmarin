import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  actual: any = {};
  antiguas: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cargarInformacion();
  }

  cargarInformacion(): void {
    this.actual = {
      empresa: "Ias Software S.A.S",
      puesto:"Desarrollador de software",
      descripcion:"Actualmente trabajo en modalidad remota como aliado para la empresa SURA en un proyecto de seguros para autos (SOAT).",
      metodologia:"SCRUM",
      tecnologia:"Angular, TypeScript, HTML y CSS."
    };

    this.antiguas = [
      {
        empresa: "HEXA SOLUTIONS S.A.S",
        puesto:"Desarrollador de software",
        descripcion:"Trabajé en estimación, desarrollo de historias y desarrollo web y móvil para Crezcamos.",
        metodologia:"SCRUM",
        tecnologia:"Angular, TypeScript y primeNG IONIC con Angular y CSS."
      },
      {
        empresa: "GBP S.A.S",
        puesto:"Desarrollador FullStack",
        descripcion:"Desarrollo de funcionalidades de vistas ya entregadas por otro desarrollador y creación de CMS.",
        metodologia:"N/A",
        tecnologia:"Vue JS, Laravel y MySQL."
      },
      {
        empresa: "SCORPII S.A.S",
        puesto:"Desarrollador FullStack",
        descripcion:"En levantamiento de requerimientos para creación y desarrollo de historias.",
        metodologia:"N/A",
        tecnologia:"Vue js, Laravel,  Bootstrap y MySQL."
      },
      {
        empresa: "SYSTEMICO S.A.S",
        puesto:"Desarrollador junior",
        descripcion:"Desarrollo de historias para Concremovil, Cajasan y Cootrasur.",
        metodologia:"SCRUM",
        tecnologia:"Vue js y Bootstrap"
      }
    ]
  }
}
