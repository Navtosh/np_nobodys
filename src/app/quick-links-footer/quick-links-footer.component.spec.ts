import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksFooterComponent } from './quick-links-footer.component';

describe('QuickLinksFooterComponent', () => {
  let component: QuickLinksFooterComponent;
  let fixture: ComponentFixture<QuickLinksFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLinksFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLinksFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
