import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBeispieleComponent } from './route-beispiele.component';

describe('RouteBeispieleComponent', () => {
  let component: RouteBeispieleComponent;
  let fixture: ComponentFixture<RouteBeispieleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteBeispieleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteBeispieleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
