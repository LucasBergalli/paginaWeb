import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaGestionComponent } from './area-gestion.component';

describe('AreaGestionComponent', () => {
  let component: AreaGestionComponent;
  let fixture: ComponentFixture<AreaGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
