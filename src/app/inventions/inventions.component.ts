import { Component, OnInit } from '@angular/core';
import { InventionsService } from '../inventions.service';
import { Inventions } from '../inventions';

import {GridOptions} from "ag-grid-community";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'],
  providers : [InventionsService]
})
export class InventionsComponent implements OnInit {

public gridOptions : GridOptions;
public rowData :any[];
public columndefs : any[];

nameModel : String;
inventorModel : String;
yearmodel : String;
inventions : Inventions[];
newInvention : Inventions;
  constructor(private inventionsService : InventionsService) {

    this.gridOptions=<GridOptions>{
      onGridReady:() =>{
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.columndefs=[
      {headerName :"Name",field:"name"},
      {headerName :"Inventor",field:"inventor"},
      {headerName :"Year",field:"year"}
  ];
    this.nameModel='';
    this.inventorModel='';
    this.yearmodel='';
    
    this.inventions = inventionsService.getInventions();
    this.rowData =this.inventionsService.getInventions();
  
   }

  ngOnInit() 
  {
    
  }

}
