import { ProfilesListComponent } from './modules/profiles/components/profiles-list/profiles-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './modules/profiles/components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./modules/profiles/profiles.module').then(m => m.ProfilesModule)
  },
  {
    path: '',
    redirectTo: 'profile/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
