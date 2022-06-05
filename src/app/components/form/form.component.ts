import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpApiService } from './../../api/http-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // 匯入表單相關功能

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  items!: MenuItem[];
  home!: MenuItem;
  applyForm!: FormGroup;

  constructor(
    private HttpApi: HttpApiService,
    private fb: FormBuilder,// 將表單相關元件啟動，並給予名稱fb
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Form' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.applyForm = this.fb.group({ // 在元件啟動的時候建立每個表單的控制元件
      name: ["", Validators.required], //必填
      uniform_number: ["", Validators.required], //必填
      created_by: ["", Validators.required], //必填
    });
  }

  name: any
  uniform_number: any
  created_by: any = "00000000-0000-0000-0000-000000000000"
  postCompanyProject(): void {
    if (this.applyForm.valid) {

      let body: any = {};//接收資料的陣列
      body['name'] = this.name;
      body['uniform_number'] = Number(this.uniform_number);
      body['created_by'] = this.created_by;
      console.log(body)

      this.HttpApi.postCompanyRequest(body)
        .subscribe(Request => {
          console.log(Request)
        })

    } else {

    }
  }

}
