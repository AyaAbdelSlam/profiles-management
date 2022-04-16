import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-user-profile-activity',
  templateUrl: './user-profile-activity.component.html',
})
export class UserProfileActivityComponent implements OnInit {
  @Input() userInfo: Profile | null;

  constructor() { }

  ngOnInit(): void {
  }

}
