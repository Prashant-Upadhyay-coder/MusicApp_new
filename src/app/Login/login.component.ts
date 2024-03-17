import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import {  GoogleLoginProvider, SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule],
  providers:[SocialAuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements  OnInit{
  user: SocialUser | undefined;
  constructor(private authService: SocialAuthService ,private router: Router) { }

 
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.handleAuthenticationResponse(this.user.idToken); // Pass the ID token to handle authentication response
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  private decodeJWTToken(token: string): any {
    return JSON.parse(atob(token.split(".")[1]));
  }

  private handleAuthenticationResponse(token: string): void {
    const responsePayload = this.decodeJWTToken(token);
    sessionStorage.setItem('loggedinUser', JSON.stringify(responsePayload));
    this.router.navigateByUrl('/music_home'); 
  }

}
