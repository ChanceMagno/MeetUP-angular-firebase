import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';
import { Meet } from '../meet.model';
import { MeetService } from '../meet.service';

@Component({
  selector: 'app-new-meet',
  templateUrl: './new-meet.component.html',
  styleUrls: ['./new-meet.component.css']
})
export class NewMeetComponent implements OnInit {
  newMeetForm: FormGroup;
  selectedGoal: number;

  constructor(private fb: FormBuilder, private MeetService: MeetService) { }


  ngOnInit() {
    this.newMeetForm = this.fb.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      info: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
      creator: ['', Validators.required],
      image: ['', Validators.required],
      attendingGoal: ['', Validators.required],
    })

  }

  addMeet() {
    var {title, location, info, time, date, creator, image, attendingGoal} = this.newMeetForm.value;
    var newMeet = new Meet(title, location, time, date, creator, image, info, attendingGoal);
    this.MeetService.saveMeet(newMeet);
    this.newMeetForm.reset();
    }
  }
