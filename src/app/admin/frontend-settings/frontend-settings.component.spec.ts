import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSettingsComponent } from './frontend-settings.component';

describe('FrontendSettingsComponent', () => {
  let component: FrontendSettingsComponent;
  let fixture: ComponentFixture<FrontendSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
