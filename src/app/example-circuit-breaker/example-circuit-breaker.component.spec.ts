import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCircuitBreakerComponent } from './example-circuit-breaker.component';

describe('ExampleCircuitBreakerComponent', () => {
  let component: ExampleCircuitBreakerComponent;
  let fixture: ComponentFixture<ExampleCircuitBreakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCircuitBreakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCircuitBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
