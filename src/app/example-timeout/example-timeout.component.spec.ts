import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ExampleTimeoutComponent } from './example-timeout.component';


describe('ExampleTimeoutComponent', () => {
  let component: ExampleTimeoutComponent;
  let fixture: ComponentFixture<ExampleTimeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTimeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
