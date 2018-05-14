import { Component, OnInit } from "@angular/core";
import { PollyInput } from "../PollyInput";
import { InputService } from "../input.service";

@Component({
  selector: "app-example-circuit-breaker",
  templateUrl: "./example-circuit-breaker.component.html",
  styleUrls: ["./example-circuit-breaker.component.css"]
})
export class ExampleCircuitBreakerComponent implements OnInit {
  constructor(private inputService: InputService) {}

  title = "Exemple pour timeout";
  input: PollyInput = {
    id: 1,
    name: "Test"
  };
  loading = false;

  onSubmit() {
    this.loading = true;
    this.inputService.getInfoCircuitBreaker(this.input.name).subscribe(info => {
      this.setInfo(info);
      this.loading = false;
    });
  }

  setInfo(info: string) {
    this.input.info = info;
  }

  ngOnInit() {}
}
