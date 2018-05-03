import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { ExampleTimeoutComponent } from "./example-timeout/example-timeout.component";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [AppComponent, ExampleTimeoutComponent],
  imports: [BrowserModule, FormsModule, MatFormFieldModule, MatInputModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
