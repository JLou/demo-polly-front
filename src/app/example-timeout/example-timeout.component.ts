import { Component, OnInit } from "@angular/core";
import { PollyInput } from "../PollyInput";
@Component({
  selector: "app-example-timeout",
  templateUrl: "./example-timeout.component.html",
  styleUrls: ["./example-timeout.component.css"]
})
export class ExampleTimeoutComponent implements OnInit {
  constructor() {}

  title = "Exemple pour timeout";
  input: PollyInput = {
    id: 1,
    name: "Test"
  };

  ngOnInit() {}
}
