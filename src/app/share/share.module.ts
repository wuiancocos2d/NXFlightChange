import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OmisSearchComponent } from './omis/omis-search/omis-search.component';
import {ContainerComponent} from './container';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [ OmisSearchComponent, ContainerComponent],
  exports: [  ContainerComponent ]
})
export class ShareModule { }
