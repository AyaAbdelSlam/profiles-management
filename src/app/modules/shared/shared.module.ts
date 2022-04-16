import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExampleModule } from '../material.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ProgressSpinnerComponent,
    PageBannerComponent
  ],
  imports: [
    CommonModule, MaterialExampleModule,

  ],
  exports: [ProgressSpinnerComponent,
    PageBannerComponent],
})
export class SharedModule { }
