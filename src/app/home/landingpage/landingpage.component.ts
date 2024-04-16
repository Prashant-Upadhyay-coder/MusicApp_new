import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  isactive: boolean =true
 
  constructor(private router:Router){

    setTimeout(() => {
      this.isactive=false
    },2000);
     setTimeout(() => {
     this.router.navigate(['Login']);
     }, 4000);

  }
 
}
