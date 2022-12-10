import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';
import { AdminComponent } from './admin/admin.component';
import { BookviewComponent } from './bookview/bookview.component';
import { IssueComponent } from './issue/issue.component';

@NgModule({
  declarations: [
    AppComponent,
    BookentryComponent,
    RegComponent,
    LogComponent,
    AdminComponent,
    BookviewComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
