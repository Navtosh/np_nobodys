import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidTilesComponent } from './mid-tiles.component';

describe('MidTilesComponent', () => {
  let component: MidTilesComponent;
  let fixture: ComponentFixture<MidTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
