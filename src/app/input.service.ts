import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InputService {
  apiBaseUrl = "http://localhost:64528/api/demo";

  constructor(private http: HttpClient) {}

  getInfoTimeout(name: string): Observable<string> {
    return this.http.get(this.apiBaseUrl + "/timeout/" + name, {
      responseType: "text"
    });
  }

  getInfoCircuitBreaker(name: string): Observable<string> {
    return this.http.get(this.apiBaseUrl + "/circuit-breaker/" + name, {
      responseType: "text"
    });
  }
}
