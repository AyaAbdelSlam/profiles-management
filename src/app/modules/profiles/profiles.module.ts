// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfilesRoutingModule } from './profiles-routing.module';



@NgModule({
  declarations: [
    ProfilesListComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule,
  ],
})
export class ProfilesModule { }