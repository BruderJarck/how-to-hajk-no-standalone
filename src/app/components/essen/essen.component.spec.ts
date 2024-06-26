import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenComponent } from './essen.component';

describe('EssenComponent', () => {
  let component: EssenComponent;
  let fixture: ComponentFixture<EssenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EssenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
