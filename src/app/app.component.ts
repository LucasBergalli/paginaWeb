import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paginaWeb';

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Eliminamos cualquier clase de fondo específica
        this.renderer.removeClass(document.body, 'pagina-web-background');

        // Si estamos en la raíz después de /paginaWeb/, aplicamos el fondo blanco
        if (event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/paginaWeb/') {
          this.renderer.addClass(document.body, 'pagina-web-background');
        }
      }
    });
  }
}
