import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahitwocontactComponent } from './rahitwocontact.component';

describe('RahitwocontactComponent', () => {
  let component: RahitwocontactComponent;
  let fixture: ComponentFixture<RahitwocontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahitwocontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahitwocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
