import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';
import { InventionsService } from './inventions.service';
import { AgGridComponent } from './ag-grid/ag-grid.component';

import {AgGridModule} from "ag-grid-angular";
import { HttpClient } from '@angular/common/http';
import { HttpCatelogService } from './http-catelog.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    AgGridComponent
    
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]
    ),
    HttpClientModule
  ],
  providers: [InventionsService,HttpCatelogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
