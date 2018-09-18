import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahionecontactComponent } from './rahionecontact.component';

describe('RahionecontactComponent', () => {
  let component: RahionecontactComponent;
  let fixture: ComponentFixture<RahionecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahionecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahionecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
