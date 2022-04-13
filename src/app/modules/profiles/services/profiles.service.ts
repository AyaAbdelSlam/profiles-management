import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profilesAPIUrl = 'https://profiles-list.firebaseio.com/Data.json';

  constructor(private http: HttpClient) { }

  getProfiles():Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesAPIUrl);
  }
}
