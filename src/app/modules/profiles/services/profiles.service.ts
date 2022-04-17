import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileConstants } from '../models/profile.constants';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profilesAPIUrl = ProfileConstants.PROFILE_SERVICE_URL;

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesAPIUrl);
  }
}
