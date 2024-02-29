import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private rt :Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Mobile_Login(){
    this.rt.navigate(['music_home']);
  }
}
