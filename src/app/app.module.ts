import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LtEchartsModule } from 'lt-echarts';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LtEchartsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
