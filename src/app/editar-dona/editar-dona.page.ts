import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-dona',
  templateUrl: 'editar-dona.page.html',
  styleUrls: ['editar-dona.page.scss'],
})
export class EditarDonaPage implements OnInit {
  dona: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Recibir los datos de la dona a través de NavigationExtras
    this.route.paramMap.subscribe(params => {
      this.dona = this.router.getCurrentNavigation()?.extras.state?.['dona'];
    });
  }

  guardarCambios() {
    // Navegar de regreso al HomePage con los cambios de la dona
    let navigationExtras = {
      state: {
        updatedDona: this.dona
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }
}
