import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  value = '';
  employmentTypes: any[];
  selectedEmploymentType: number;
  jobsList: any[];
  jobTitle = '';
  resultsFound: boolean;

  constructor(
    private viewService: ViewService
  ) { }

  ngOnInit() {
    this.getEmploymentTypes();
  }

  search() {
    if (this.jobTitle !== ('' || undefined) && this.selectedEmploymentType !== (null || undefined)) {
      this.getListingByQueryandEmploymentType();
    } else if (this.selectedEmploymentType !== (null || undefined)) {
      this.getListingByEmploymentType();
    } else {
      this.getListingByQuery();
    }
  }

  getEmploymentTypes() {
    this.viewService.getEmploymentTypes().subscribe(response => {
      this.employmentTypes = response.data;
      this.employmentTypes.forEach(element => {
      });
    });
  }

  getListingByQuery() {
    this.viewService.getPublicationsByString(this.jobTitle).subscribe(publications => {
      if (publications.included === undefined) {
        this.resultsFound = false;
      } else {
        this.resultsFound = true;
        this.jobsList = publications.included;
      }
    },
    error => {
      this.resultsFound = false;
    });
  }

  getListingByEmploymentType() {
    this.viewService.getPublicationsByEmploymentType(this.selectedEmploymentType).subscribe(publications => {
      if (publications.included === undefined) {
        this.resultsFound = false;
      } else {
        this.resultsFound = true;
        this.jobsList = publications.included;
      }
    },
    error => {
      this.resultsFound = false;
    });
  }

  getListingByQueryandEmploymentType() {
    this.viewService.getPublicationsByQueryandEmploymentType(this.jobTitle, this.selectedEmploymentType).subscribe(publications => {
      if (publications.included === undefined) {
        this.resultsFound = false;
      } else {
        this.resultsFound = true;
        this.jobsList = publications.included;
      }
    },
    error => {
      this.resultsFound = false;
    });
  }
}
