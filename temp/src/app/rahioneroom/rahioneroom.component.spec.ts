import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahioneroomComponent } from './rahioneroom.component';

describe('RahioneroomComponent', () => {
  let component: RahioneroomComponent;
  let fixture: ComponentFixture<RahioneroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahioneroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahioneroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
