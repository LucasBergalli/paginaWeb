import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy  {

  currentIndex: number = 0;
  images: HTMLImageElement[] = [];
  totalImages: number = 0;
  intervalId: any; // Para almacenar el ID del intervalo
  @ViewChild('carouselImages', { static: true }) carouselImages!: ElementRef;

  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.images = Array.from(this.carouselImages.nativeElement.querySelectorAll('img'));
    this.totalImages = this.images.length;
    this.updateImageDisplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.updateImageDisplay();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.updateImageDisplay();
  }

  private updateImageDisplay() {
    // Ocultar todas las imágenes
    this.images.forEach(image => {
      image.style.display = 'none';
    });
    // Mostrar la imagen actual
    if (this.images[this.currentIndex]) {
      this.images[this.currentIndex].style.display = 'block';
    }
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

}
