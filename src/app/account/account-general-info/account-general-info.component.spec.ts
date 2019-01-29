import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGeneralInfoComponent } from './account-general-info.component';

describe('AccountGeneralInfoComponent', () => {
  let component: AccountGeneralInfoComponent;
  let fixture: ComponentFixture<AccountGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
