import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStripComponent } from './footer-strip.component';

describe('FooterStripComponent', () => {
  let component: FooterStripComponent;
  let fixture: ComponentFixture<FooterStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
