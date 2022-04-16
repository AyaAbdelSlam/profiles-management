import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-user-profile-facts',
  templateUrl: './user-profile-facts.component.html',
})
export class UserProfileFactsComponent implements OnInit {
  @Input() userInfo: Profile | null;

  constructor() { }

  ngOnInit(): void {
  }

}
