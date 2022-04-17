import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: 'search',
    component: ProfilesListComponent,
    data: {
      title: 'Profiles'
    }
  },
  {
    path: 'detail/:profileId',
    component: UserProfileComponent,
    data: {
      title: 'Profile:'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
