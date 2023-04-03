import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // exposes ngIf and ngFor directives
import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 