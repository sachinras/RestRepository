import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';
import { InventionsService } from './inventions.service';
import { AgGridComponent } from './ag-grid/ag-grid.component';

import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]
    )

  ],
  providers: [InventionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
