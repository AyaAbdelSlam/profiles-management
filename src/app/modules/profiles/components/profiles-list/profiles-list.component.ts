import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Profile } from '../../models/profile.model';
import { ProfilesService } from '../../services/profiles.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.sass']
})

export class ProfilesListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['photo', 'id', 'email', 'name', 'phone', 'address', 'modified', 'view'];
  dataSource: MatTableDataSource<Profile>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private profilesService: ProfilesService) {
  }

  ngOnInit(): void {
    this.getAllProfiles();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllProfiles(): void {
    this.profilesService.getProfiles().subscribe((res: Profile[]) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

}

