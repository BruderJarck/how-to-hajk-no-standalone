import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldungPacklisteComponent } from './anmeldung-packliste.component';

describe('AnmeldungPacklisteComponent', () => {
  let component: AnmeldungPacklisteComponent;
  let fixture: ComponentFixture<AnmeldungPacklisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnmeldungPacklisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnmeldungPacklisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
