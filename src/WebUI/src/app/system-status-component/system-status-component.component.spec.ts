import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatusComponentComponent } from './system-status-component.component';

describe('SystemStatusComponentComponent', () => {
  let component: SystemStatusComponentComponent;
  let fixture: ComponentFixture<SystemStatusComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemStatusComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
