import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';
import { ServiciosService } from '../../services/servicios.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  correo: string = 'contacto@safeservicechile.cl';
  // telefono: string = '+56 9 5097 1648';
  telefono: string = '+56 9 4535 5550';

  contactoForm: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private servicios: ServiciosService,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.contactoForm = this.formBuilder.group({
      nombre: [''],
      email: [''],
      asunto: [''],
      mensaje: [''],
    });
  }

  ngOnInit(): void {
    
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

  scrollToPortfolio(idRef: any) {
    const element = document.getElementById(`${idRef}`); // Ajusta el ID según tu estructura HTML
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  enviarMensaje() {
    this.spinner.show();
    if (!this.contactoForm.valid) {
      console.log('Debes completar todo el formulario');
      return;
    }
    const {nombre, email, asunto, mensaje} = this.contactoForm.value;
    const datos = {
      datosRegistro: {
        nombre,
        email,
        asunto,
        mensaje
      },
      datosCorreo: {
        correo: this.correo,
        asunto
      }
    }
    this.servicios.crearContacto(datos.datosRegistro, datos.datosCorreo ).subscribe({
      next: async (res) => {
        this.contactoForm.reset();
        this.spinner.hide();
        this.toastrService.success("Correo enviado correctamente");  
      },
      error: (error:HttpErrorResponse) => {
        this.toastrService.success("No se pudo enviar el correo");
      }
    });
  }
}
