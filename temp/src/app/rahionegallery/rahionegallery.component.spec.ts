import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahionegalleryComponent } from './rahionegallery.component';

describe('RahionegalleryComponent', () => {
  let component: RahionegalleryComponent;
  let fixture: ComponentFixture<RahionegalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahionegalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahionegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
