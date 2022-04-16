import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
})
export class ProgressSpinnerComponent implements OnInit {
  @Input() isVisible = false;
  @Input() color: ThemePalette = 'accent';
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() value = 50;

  constructor() { }

  ngOnInit(): void {
  }


}
