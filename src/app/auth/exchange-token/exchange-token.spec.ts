import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeToken } from './exchange-token';

describe('ExchangeToken', () => {
  let component: ExchangeToken;
  let fixture: ComponentFixture<ExchangeToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeToken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
