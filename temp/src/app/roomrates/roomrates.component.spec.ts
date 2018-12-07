import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomratesComponent } from './roomrates.component';

describe('RoomratesComponent', () => {
  let component: RoomratesComponent;
  let fixture: ComponentFixture<RoomratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
