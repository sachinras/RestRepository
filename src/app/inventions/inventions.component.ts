import { Component, OnInit } from '@angular/core';
import { InventionsService } from '../inventions.service';
import { Inventions } from '../inventions';
import {GridOptions} from "ag-grid-community";

import {observable} from 'rxjs';
import { HttpCatelogService } from '../http-catelog.service';

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'],
  providers : [InventionsService]
})
export class InventionsComponent implements OnInit {


public gridOptions : GridOptions;
public webapigridOptions : GridOptions;
public rowData :any[];
public columndefs : any[];

public webapicolumndefs : any[];

public catelogs:any[] ;

nameModel : String;
inventorModel : String;
yearmodel : String;
inventions : Inventions[];
newInvention : Inventions;



  constructor(private inventionsService : InventionsService,
              private httpCatelog:HttpCatelogService) {

      this.gridOptions=<GridOptions>{
        onGridReady:() =>{
          this.gridOptions.api.sizeColumnsToFit();
          this.gridOptions.api.setColumnDefs(this.columndefs);
          this.gridOptions.api.setRowData(this.rowData);
        }
       
    };

    this.webapigridOptions=<GridOptions>{
      onGridReady:() =>{
        this.webapigridOptions.api.sizeColumnsToFit();
        this.webapigridOptions.api.setColumnDefs(this.webapicolumndefs);
        this.webapigridOptions.api.setRowData(this.catelogs);
      }
    };

    this.webapicolumndefs=[
      {headerName :"Id",field:"id"},
      {headerName :"Type",field:"type"}
  ];

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
    this.httpCatelog.getCatelogTypes().subscribe(
      (data:any)=>(this.catelogs=data)
    );
  }
  OnAddRow(name:string,inventor:string,year:string){
    var newItem = {name:"Dot Net",inventor:"Anil",year:"2018"};
    this.gridOptions.api.updateRowData({ add: [newItem] });
  }
}
