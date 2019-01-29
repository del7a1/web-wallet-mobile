import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsSliderComponent } from './accounts-slider.component';

describe('AccountsSliderComponent', () => {
  let component: AccountsSliderComponent;
  let fixture: ComponentFixture<AccountsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
