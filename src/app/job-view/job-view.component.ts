import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobViewService } from './job-view.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {

  jobID: number;
  jobData: any;
  resultsFound: boolean;

  constructor(
    private route: ActivatedRoute,
    private jobViewService: JobViewService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const argument = 'jobID';
      this.jobID = params[argument];
      this.getJobDescriptionById(this.jobID);
    });
  }

  getJobDescriptionById(jobID) {
    this.jobViewService.getJobByID(jobID).subscribe(response => {
      if (response.data.attributes === undefined) {
        this.resultsFound = false;
      } else {
        this.resultsFound = true;
        this.jobData = response.data.attributes;
      }
    },
    error => {
      this.resultsFound = false;
    });
  }
}
