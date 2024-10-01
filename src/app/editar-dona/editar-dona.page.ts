import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DonaService } from '../dona.service';

@Component({
  selector: 'app-editar-dona',
  templateUrl: 'editar-dona.page.html',
  styleUrls: ['editar-dona.page.scss'],
})
export class EditarDonaPage implements OnInit {
  dona: any;

  constructor(private router: Router, private route: ActivatedRoute, private donaService: DonaService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dona = this.router.getCurrentNavigation()?.extras.state?.['dona'];
    });
  }

  guardarCambios() {
    this.donaService.updateDona(this.dona);
    this.router.navigate(['/admin']);
  }
}
