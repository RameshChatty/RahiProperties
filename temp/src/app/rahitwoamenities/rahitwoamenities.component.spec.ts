import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahitwoamenitiesComponent } from './rahitwoamenities.component';

describe('RahitwoamenitiesComponent', () => {
  let component: RahitwoamenitiesComponent;
  let fixture: ComponentFixture<RahitwoamenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahitwoamenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahitwoamenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
