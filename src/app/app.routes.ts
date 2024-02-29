import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MusicHomeComponent } from './home/music-home/music-home.component';
import { MainComponent } from './home/main/main.component';
import { MusicPlayerComponent } from './home/music-player/music-player.component';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { LoginComponent } from './Login/login.component';

export const routes: Routes = [
    {  path: '',redirectTo:'Landing' , pathMatch:'full'},
    { path: 'music_home', component: MusicHomeComponent, children: [
          { path: '', component: MainComponent },
        ]},
    { path:'Header',component:HeaderComponent },
    { path:'Musicplayer',component:MusicPlayerComponent  },
    { path:'Landing',component:LandingpageComponent },
    {  path:'Footer',component:FooterComponent},
    { path:'Login',component:LoginComponent},
    { path:'**',component:LoginComponent}
];
