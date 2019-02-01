import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsPage } from './account-details.page';

describe('AccountDetailsPage', () => {
  let component: AccountDetailsPage;
  let fixture: ComponentFixture<AccountDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
