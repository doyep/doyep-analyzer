import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StravaButton } from './strava-button';

describe('StravaButton', () => {
  let component: StravaButton;
  let fixture: ComponentFixture<StravaButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StravaButton],
    }).compileComponents();

    fixture = TestBed.createComponent(StravaButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
