import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloneComponent } from './modelone.component';

describe('ModeloneComponent', () => {
  let component: ModeloneComponent;
  let fixture: ComponentFixture<ModeloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
