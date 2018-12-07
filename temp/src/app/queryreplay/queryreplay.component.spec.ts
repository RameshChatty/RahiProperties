import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryreplayComponent } from './queryreplay.component';

describe('QueryreplayComponent', () => {
  let component: QueryreplayComponent;
  let fixture: ComponentFixture<QueryreplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryreplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryreplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
