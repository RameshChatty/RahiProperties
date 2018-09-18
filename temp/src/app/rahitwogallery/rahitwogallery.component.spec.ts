import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahitwogalleryComponent } from './rahitwogallery.component';

describe('RahitwogalleryComponent', () => {
  let component: RahitwogalleryComponent;
  let fixture: ComponentFixture<RahitwogalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahitwogalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahitwogalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
