import { Component, OnInit } from "@angular/core";
import { PollyInput } from "../PollyInput";
import { InputService } from "../input.service";

@Component({
  selector: "app-example-timeout",
  templateUrl: "./example-timeout.component.html",
  styleUrls: ["./example-timeout.component.css"]
})
export class ExampleTimeoutComponent implements OnInit {
  constructor(private inputService: InputService) {}

  title = "Exemple pour timeout";
  input: PollyInput = {
    id: 1,
    name: "Test"
  };

  onSubmit() {
    this.inputService
      .getInfoTimeout(this.input.name)
      .subscribe(info => this.setInfo(info));
  }

  setInfo(info: string) {
    this.input.info = info;
  }

  ngOnInit() {}
}
