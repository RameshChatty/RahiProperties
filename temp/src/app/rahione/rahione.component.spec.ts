import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahioneComponent } from './rahione.component';

describe('RahioneComponent', () => {
  let component: RahioneComponent;
  let fixture: ComponentFixture<RahioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
