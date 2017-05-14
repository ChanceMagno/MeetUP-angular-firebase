import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeetComponent } from './edit-meet.component';

describe('EditMeetComponent', () => {
  let component: EditMeetComponent;
  let fixture: ComponentFixture<EditMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
