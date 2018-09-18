import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderahitwoComponent } from './siderahitwo.component';

describe('SiderahitwoComponent', () => {
  let component: SiderahitwoComponent;
  let fixture: ComponentFixture<SiderahitwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderahitwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderahitwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
