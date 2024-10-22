import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular'; 
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GcdsComponentsModule,
    CommonModule // Add CommonModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
