import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Profile } from '../../models/profile.model';
import { ProfilesService } from '../../services/profiles.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProfilesListConstants } from './profiles-list.constants';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrActions } from 'src/app/modules/shared/models/toastr-actions.enum';


@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.sass']
})

export class ProfilesListComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: false })
  set profilesTbSort(value: MatSort) {
    if (this.dataSource)
      this.dataSource.sort = value;
  }

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource)
      this.dataSource.paginator = value;
  }

  displayedColumns = ['photo', 'id', 'email', 'name', 'phone', 'address', 'modified', 'view'];
  dataSource: MatTableDataSource<Profile>;
  noDataMatchString = ProfilesListConstants.NO_DATA_MATCH;
  pageTitle = ProfilesListConstants.PAGE_TITLE;
  isLoading = false;
  ngUnsubscribe = new Subject<void>();

  constructor(private profilesService: ProfilesService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAllProfiles();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllProfiles(): void {
    this.isLoading = true;
    this.profilesService.getProfiles()
      .pipe(takeUntil(this.ngUnsubscribe),
        catchError(err => {
          this.isLoading = false;
          this._snackBar.open(err, ToastrActions.Dissmis);
          return throwError(err);
        }),
      )
      .subscribe((result: Profile[]) => {
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(result);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

