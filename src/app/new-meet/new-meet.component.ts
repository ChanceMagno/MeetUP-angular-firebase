import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';
import { Meet } from '../meet.model';
import { MeetService } from '../meet.service';
import { MaterializeModule } from "angular2-materialize";

@Component({
  selector: 'app-new-meet',
  templateUrl: './new-meet.component.html',
  styleUrls: ['./new-meet.component.css']
})
export class NewMeetComponent implements OnInit {
  newMeetForm: FormGroup;
  selectedGoal: number;

  warnAction = new EventEmitter<string|MaterializeAction>();
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

  warnModal() {
  this.warnAction.emit({action:"modal",params:['open']});
  }

  showGoal(goal){
    this.selectedGoal = goal;
  }

  addMeet() {
    var {title, location, info, time, date, creator, image, attendingGoal} = this.newMeetForm.value;
    if(title.length < 2 || location.length < 2 || info.length < 2 || time.length < 2 || date.length < 2 || creator.length < 2 || image.length < 2 || attendingGoal.length < 1) {
      this.warnModal();
    } else{
      var newMeet = new Meet(title, location, time, date, creator, image, info, attendingGoal);
      this.MeetService.saveMeet(newMeet);
      this.newMeetForm.reset();
      }
    }
  }
