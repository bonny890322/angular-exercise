import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpApiService } from './../../api/http-api.service';
import { MatPaginator, MatPaginatorIntl, PageEvent, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; //表格套件

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  items!: MenuItem[];
  home!: MenuItem;

  displayedColumns: string[] = ['name', 'uniform_number', 'created_at'];
  dataSource = new MatTableDataSource();

  constructor(
    private HttpApi: HttpApiService
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Table' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.getCompanyProject()
  }

  //取得Company資料
  totalCount: any;
  data: any//接資料的表格變數
  getCompanyProject(): void {
    this.HttpApi.getCompanyRequest(1, 10)
      .subscribe(Request => {
        this.data = Request.body.companies
        console.log(this.data)
        this.totalCount = Request.body.companies.length
        console.log(this.totalCount)
        this.showData(this.dataSource, this.data)
      })
  }

  // 顯示資料
  showData(dataSource: any, data: any) {
    dataSource.data = data;//將資料帶入
    dataSource.sort = this.sort;
    dataSource.paginator = this.paginator;
  }

}
