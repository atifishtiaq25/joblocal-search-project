import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  baseURL = 'https://staging-api.joblocal.de/v4';

  constructor(
    private http: HttpClient
    ) {}

  getEmploymentTypes(): any {
    return this.http.get(this.baseURL + '/job-ads/employment-types');
  }

  getPublicationsByString(query): any {
    return this.http.get(this.baseURL + '/search-publications?search.query=' + query);
  }

  getPublicationsByEmploymentType(empType): any {
    return this.http.get(this.baseURL + '/search-publications?filter.job_type=' + empType);
  }

  getPublicationsByQueryandEmploymentType(query, empType): any {
    return this.http.get(this.baseURL + '/search-publications?search.query=' + query + '&filter.job_type=' + empType);
  }
}
