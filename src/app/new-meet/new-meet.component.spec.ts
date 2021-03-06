import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetComponent } from './new-meet.component';

describe('NewMeetComponent', () => {
  let component: NewMeetComponent;
  let fixture: ComponentFixture<NewMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
