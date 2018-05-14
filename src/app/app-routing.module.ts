import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExampleTimeoutComponent } from "./example-timeout/example-timeout.component";
import { ExampleCircuitBreakerComponent } from "./example-circuit-breaker/example-circuit-breaker.component";

const routes: Routes = [
  { path: "example-timeout", component: ExampleTimeoutComponent },
  { path: "example-circuit-breaker", component: ExampleCircuitBreakerComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
