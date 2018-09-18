import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahitwoaboutComponent } from './rahitwoabout.component';

describe('RahitwoaboutComponent', () => {
  let component: RahitwoaboutComponent;
  let fixture: ComponentFixture<RahitwoaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahitwoaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahitwoaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
