import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahioneamenitiesComponent } from './rahioneamenities.component';

describe('RahioneamenitiesComponent', () => {
  let component: RahioneamenitiesComponent;
  let fixture: ComponentFixture<RahioneamenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahioneamenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahioneamenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
