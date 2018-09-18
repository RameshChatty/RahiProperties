import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentrahioneComponent } from './contentrahione.component';

describe('ContentrahioneComponent', () => {
  let component: ContentrahioneComponent;
  let fixture: ComponentFixture<ContentrahioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentrahioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentrahioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
