import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSystemComponent } from './email-system.component';

describe('EmailSystemComponent', () => {
  let component: EmailSystemComponent;
  let fixture: ComponentFixture<EmailSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSystemComponent]
    });
    fixture = TestBed.createComponent(EmailSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
