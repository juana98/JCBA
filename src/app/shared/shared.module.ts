import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomMaterialModule, ReactiveFormsModule],
  exports: [
    CustomMaterialModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
