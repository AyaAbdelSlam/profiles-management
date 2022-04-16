import { ProfilesService } from './../../services/profiles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  title = 'Profile:';
  ngUnsubscribe = new Subject<void>();
  user: Profile | null;
  tabLoadTimes: Date[] = [];


  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfilesService) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const userCurrentLocalId = Number(params.get('profileId'));
      this.getUserProfile(userCurrentLocalId);
    });
  }

  getUserProfile(userId: Number) {
    this.profileService.getProfiles()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((result: Profile[]) => {
        this.user = result.find(item => item.localid === userId) ?? null;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
