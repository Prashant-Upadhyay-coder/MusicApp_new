
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor( private rt :Router){}
  ngOnInit(): void {
    
  } 
  home(){
   this.rt.navigate(['music_home'])
  }
  musicPlayer(){
   this.rt.navigate(['Musicplayer'])
  }
}
