import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FakeStoreModule } from './fake-store/fake-store.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FakeStoreModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',pathMatch:'full',
        component:HomeComponent
      }
    ]),
  ],
  bootstrap:[AppComponent],
  providers: [provideHttpClient()]
})
export class AppModule { }
