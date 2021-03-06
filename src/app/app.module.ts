import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TableEmojiComponent } from './table-emoji/table-emoji.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, TableEmojiComponent, ContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
