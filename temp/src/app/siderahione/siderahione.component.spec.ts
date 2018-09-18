import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderahioneComponent } from './siderahione.component';

describe('SiderahioneComponent', () => {
  let component: SiderahioneComponent;
  let fixture: ComponentFixture<SiderahioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderahioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderahioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
