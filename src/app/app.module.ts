import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdpUiComponentsModule } from '@adp/uiComponents';
import { BaseballModule } from '@adp/baseball';
import { BASEBALL_API_CONFIGURATION } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdpUiComponentsModule,
    BaseballModule.forRoot(BASEBALL_API_CONFIGURATION)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
