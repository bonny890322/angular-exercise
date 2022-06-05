import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  private BaseUrl: string = 'http://localhost:8080/authority/v1.0'; //伺服器固定網址

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '127.0.0.1',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  //取得Company資料
  getCompanyRequest(page: number, limit: number): Observable<any> {
    const url = `${this.BaseUrl}/companies?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }

  //新增Company資料
  postCompanyRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/companies?page=1&limit=20`;
    return this.http.post(url, body);
  }

  //新增Account資料
  postAccountRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/account`;
    return this.http.post(url, body, this.httpOptions);
  }



}
