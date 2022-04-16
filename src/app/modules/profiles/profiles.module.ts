// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesService } from './services/profiles.service';
import { UserProfileDetailsComponent } from './components/user-profile-details/user-profile-details.component';
import { UserProfileIdComponent } from './components/user-profile-id/user-profile-id.component';
import { UserProfileActivityComponent } from './components/user-profile-activity/user-profile-activity.component';
import { UserProfileFactsComponent } from './components/user-profile-facts/user-profile-facts.component';



@NgModule({
  declarations: [
    ProfilesListComponent,
    UserProfileComponent,
    UserProfileDetailsComponent,
    UserProfileIdComponent,
    UserProfileActivityComponent,
    UserProfileFactsComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    SharedModule,
    ProfilesRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [ProfilesService]
})
export class ProfilesModule { }
