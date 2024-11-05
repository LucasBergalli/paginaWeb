import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProduccionComponent } from './area-produccion.component';

describe('AreaProduccionComponent', () => {
  let component: AreaProduccionComponent;
  let fixture: ComponentFixture<AreaProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaProduccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
