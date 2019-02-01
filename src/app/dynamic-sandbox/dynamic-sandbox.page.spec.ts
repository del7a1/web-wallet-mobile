import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicSandboxPage } from './dynamic-sandbox.page';

describe('DynamicSandboxPage', () => {
  let component: DynamicSandboxPage;
  let fixture: ComponentFixture<DynamicSandboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicSandboxPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSandboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
