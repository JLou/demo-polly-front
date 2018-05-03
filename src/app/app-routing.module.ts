import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExampleTimeoutComponent } from "./example-timeout/example-timeout.component";

const routes: Routes = [
  { path: "example-timeout", component: ExampleTimeoutComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
