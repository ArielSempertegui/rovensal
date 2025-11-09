import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './homeComponent.html',
  styleUrl: './homeComponent.css',
  standalone: true
})
export class HomeComponent {
  
  terminoBusqueda: string = '';

  constructor(private router: Router) { }

  buscarProductosRouted(){
    if(this.terminoBusqueda.trim()){
      this.router.navigate(['sempertegui/catalog'], {
        queryParams: { busqueda: this.terminoBusqueda }
      })
    }
  }

}
