import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
})
export class UserProfileDetailsComponent implements OnInit {
  @Input() userInfo: Profile | null;
  constructor() { }

  ngOnInit(): void {
  }

}
