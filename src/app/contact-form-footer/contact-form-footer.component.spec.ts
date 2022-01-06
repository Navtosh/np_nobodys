import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormFooterComponent } from './contact-form-footer.component';

describe('ContactFormFooterComponent', () => {
  let component: ContactFormFooterComponent;
  let fixture: ComponentFixture<ContactFormFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
