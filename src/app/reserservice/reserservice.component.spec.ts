import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserserviceComponent } from './reserservice.component';

describe('ReserserviceComponent', () => {
  let component: ReserserviceComponent;
  let fixture: ComponentFixture<ReserserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
