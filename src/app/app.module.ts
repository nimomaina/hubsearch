import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HubService } from './hub.service';
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
