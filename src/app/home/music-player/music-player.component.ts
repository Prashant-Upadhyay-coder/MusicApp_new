import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AudioService } from './audio.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
    selector: 'app-music-player',
    standalone: true,
    providers: [AudioService],
    templateUrl: './music-player.component.html',
    styleUrl: './music-player.component.css',
    imports: [FormsModule, CommonModule, HttpClientModule, FooterComponent]
})
export class MusicPlayerComponent implements OnInit{

  image=[
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
      
  ] 
  audio = new Audio(); // Create an audio element
  tracks: any[] = []; // Initialize the tracks array
  isLoading: boolean = true;
  selectedTrackIndex: number | null = null;
  selectedTrack: any | null = null;
  isPlaying: boolean = false;
  progressInterval: any;
  currentTime: number = 0;
  
  constructor(private spotifyService: AudioService) {
    this.spotifyService.getTracks().subscribe(data => {
      this.tracks = data.items;
      if (this.tracks.length > 0) {
        this.selectedTrackIndex = 0;
        this.selectedTrack = this.tracks[0];
      }
      this.isLoading = false;
    });
   }
  
  ngOnInit() {
   
  }
  playOrPauseTrack(trackUrl: string) {
    if (this.isPlaying) {
      this.stopTrack(); // If audio is playing, stop it
    } else {
      this.playTrack(trackUrl); // If audio is paused, play it
    }
  }
  
  playTrack(trackUrl: string) {
    this.audio.src = trackUrl;
    this.audio.load(); // Load the audio
    this.audio.play(); // Play the audio
    this.isPlaying = true; // Update isPlaying to true
    // Reset the progress bar and update the duration
    this.resetProgress();
    this.updateDuration();
  }
  stopTrack() {
    this.audio.pause(); // Pause the audio
    this.isPlaying = false; // Update isPlaying to false
    console.log('Audio is paused:', this.isPlaying);
  }
  
  selectNextTrack() {
    if (this.selectedTrackIndex !== null && this.selectedTrackIndex < this.tracks.length - 1) {
      this.selectedTrackIndex++;
      this.selectedTrack = this.tracks[this.selectedTrackIndex];
      this.playTrack(this.selectedTrack.track.preview_url);
    }
  }
  
  selectPreviousTrack() {
    if (this.selectedTrackIndex !== null && this.selectedTrackIndex > 0) {
      this.selectedTrackIndex--;
      this.selectedTrack = this.tracks[this.selectedTrackIndex];
      this.playTrack(this.selectedTrack.track.preview_url);
    }
  }
  
  

  getProgress() {
    return (this.currentTime / this.audio.duration) * 100;
  }
  
  getElapsedTime() {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = Math.floor(this.currentTime % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  getDuration() {
    if (isNaN(this.audio.duration) || !isFinite(this.audio.duration)) {
      return '0:00'; // or any other default value
    }
  
    const minutes = Math.floor(this.audio.duration / 60);
    const seconds = Math.floor(this.audio.duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  resetProgress() {
    this.currentTime = 0;
  }
  
  updateDuration() {
    this.progressInterval = setInterval(() => {
      this.currentTime = this.audio.currentTime;
      if (this.audio.ended) {
        this.resetProgress();
        clearInterval(this.progressInterval);
      }
    }, 1000);
  }
  
  ngOnDestroy() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
  
  
}
