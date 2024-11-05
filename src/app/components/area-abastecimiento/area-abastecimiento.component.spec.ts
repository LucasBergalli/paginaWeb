import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAbastecimientoComponent } from './area-abastecimiento.component';

describe('AreaAbastecimientoComponent', () => {
  let component: AreaAbastecimientoComponent;
  let fixture: ComponentFixture<AreaAbastecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAbastecimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAbastecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
