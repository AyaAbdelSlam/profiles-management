import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-user-profile-id',
  templateUrl: './user-profile-id.component.html',
})
export class UserProfileIdComponent implements OnInit {
  @Input() userInfo: Profile | null;

  constructor() { }

  ngOnInit(): void {
  }

}
