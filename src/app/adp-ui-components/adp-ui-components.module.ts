import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PageHeaderComponent } from './page-header/page-header.component';
import { LoadingIndicatorInterceptor } from './loading-indicator/loading-indicator.interceptor';
import { LoadingIndicatorService } from './loading-indicator/loading-indicator.service';
import { InputErrorComponent } from './input-error/input-error.component';

/**
 * UI Components for general use in the UI
 */
@NgModule({
  declarations: [PageHeaderComponent, InputErrorComponent],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true},
    LoadingIndicatorService
  ],
  exports: [
    PageHeaderComponent,
    InputErrorComponent
  ]
})
export class AdpUiComponentsModule { }
