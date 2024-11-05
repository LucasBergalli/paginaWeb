import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministracionComponent } from './area-administracion.component';

describe('AreaAdministracionComponent', () => {
  let component: AreaAdministracionComponent;
  let fixture: ComponentFixture<AreaAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
