import { Component } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  correo:string = 'contacto@safeservice.cl';
  telefono:string = '+56 9 5097 1648';

  constructor(private router: Router) {

  }

toggleMobileNav(): void {
  const navbar = document.getElementById('navbar');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

  if (navbar && mobileNavToggle) {
    navbar.classList.toggle('navbar-mobile');
    navbar.classList.toggle('navbar');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  }
}

scrollToPortfolio(idRef:any) {
  const element = document.getElementById(`${idRef}`); // Ajusta el ID según tu estructura HTML
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}
