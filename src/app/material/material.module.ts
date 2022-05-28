import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';


// 放所有要import的material components，之後新增material只要修改這裡就好
const MaterialCompomnents = [
  MatSliderModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatGridListModule,
  MatStepperModule,
  MatDialogModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialCompomnents,
  ],
  exports: [
    MaterialCompomnents,//所有material cmponents
  ],
})
export class MaterialModule { }
