import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobViewService {

  baseURL = 'https://staging-api.joblocal.de/v4';

  constructor( private http: HttpClient ) { }

  getJobByID(jobID): any {
    return this.http.get(this.baseURL + '/jobs/' + jobID);
  }
}
