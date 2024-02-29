import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit{
 images: any[]= [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    'assets/download (1).jfif',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Secondimages : any[] = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Thirdimages: any[]  = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    '/assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Fourthimages : any[] = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Fifthimages : any[] = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  constructor( private rt :Router){}
  ngOnInit() {
    this.observeImages();
  }


  RTMP(){
  this.rt.navigate(['Musicplayer'])
  }
  observeImages() {
    const images = document.querySelectorAll('.scrolling-image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    images.forEach((image: any) => {
      observer.observe(image);
    });
  }
}


