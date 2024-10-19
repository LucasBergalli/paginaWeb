import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaComercialComponent } from './area-comercial.component';

describe('AreaComercialComponent', () => {
  let component: AreaComercialComponent;
  let fixture: ComponentFixture<AreaComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
