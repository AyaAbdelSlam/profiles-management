import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PageFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PageFooterComponent]
})
export class CoreModule { }
