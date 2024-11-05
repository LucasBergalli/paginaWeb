import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLogisticaComponent } from './area-logistica.component';

describe('AreaLogisticaComponent', () => {
  let component: AreaLogisticaComponent;
  let fixture: ComponentFixture<AreaLogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaLogisticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
