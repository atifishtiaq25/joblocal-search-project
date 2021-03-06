import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material';
import { ViewComponent } from './view/view.component';
import { JobViewComponent } from './job-view/job-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    JobViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
