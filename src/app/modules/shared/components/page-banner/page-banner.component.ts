import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.sass']
})
export class PageBannerComponent implements OnInit {

  @Input() initailTemplate: TemplateRef<any>;
  currentTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
    this.currentTemplate = this.initailTemplate;
  }

}
