import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "../main/main.component";
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
    selector: 'app-music-home',
    standalone: true,
    templateUrl: './music-home.component.html',
    styleUrl: './music-home.component.css',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent]
})
export class MusicHomeComponent {

}
