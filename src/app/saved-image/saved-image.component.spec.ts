import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedImageComponent } from './saved-image.component';

describe('SavedImageComponent', () => {
  let component: SavedImageComponent;
  let fixture: ComponentFixture<SavedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
