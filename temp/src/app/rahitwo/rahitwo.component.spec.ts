import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahitwoComponent } from './rahitwo.component';

describe('RahitwoComponent', () => {
  let component: RahitwoComponent;
  let fixture: ComponentFixture<RahitwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahitwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahitwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
