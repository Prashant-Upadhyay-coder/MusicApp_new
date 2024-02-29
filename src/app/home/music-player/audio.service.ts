import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AudioService {
  

  private apiUrl = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '11d418e701mshe7b47214154d0f5p13624ajsn22c6655fdd46',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  });

  private tracks: any[] = []; // Cached tracks
  private dataLoaded: boolean = false; // Flag to track data loading status

  constructor(private http: HttpClient) { }

  getTracks(): Observable<any> {
    if (this.dataLoaded) {
      return of(this.tracks); // Return cached data if already loaded
    } else {
      const startTime = new Date().getTime(); // Record start time
      return this.http.get(this.apiUrl, { headers: this.headers }).pipe(
        tap((data: any) => {
          this.tracks = data.items;
          this.dataLoaded = true; // Mark data as loaded
          const endTime = new Date().getTime(); // Record end time
          const duration = endTime - startTime;
          console.log(`API request took ${duration} milliseconds`);
        }),
        catchError(error => {
          console.error('Error fetching tracks:', error);
          throw error; // Rethrow the error to propagate it to the component
        })
      );
    }
  }

  isDataLoaded(): boolean {
    return this.dataLoaded;
  }

  getLoadedTracks(): any[] {
    return this.tracks;
  }
  
}
  

