import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahioneaboutComponent } from './rahioneabout.component';

describe('RahioneaboutComponent', () => {
  let component: RahioneaboutComponent;
  let fixture: ComponentFixture<RahioneaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahioneaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahioneaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
