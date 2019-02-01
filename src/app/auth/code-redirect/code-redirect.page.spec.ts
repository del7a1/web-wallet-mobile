import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRedirectPage } from './code-redirect.page';

describe('CodeRedirectComponent', () => {
  let component: CodeRedirectPage;
  let fixture: ComponentFixture<CodeRedirectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeRedirectPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeRedirectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
