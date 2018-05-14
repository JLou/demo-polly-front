import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { InputService } from "./input.service";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ExampleTimeoutComponent } from "./example-timeout/example-timeout.component";
import { AppRoutingModule } from ".//app-routing.module";
import { ExampleCircuitBreakerComponent } from './example-circuit-breaker/example-circuit-breaker.component';

@NgModule({
  declarations: [AppComponent, ExampleTimeoutComponent, ExampleCircuitBreakerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [InputService],
  bootstrap: [AppComponent]
})
export class AppModule {}
