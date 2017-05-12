import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-new-meet',
  templateUrl: './new-meet.component.html',
  styleUrls: ['./new-meet.component.css']
})
export class NewMeetComponent implements OnInit {
  newMeetForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.newMeetForm = this.fb.group({
      name: ['', Validators.required],
      people: ['', Validators.required],
      description: ['', Validators.required],
      goal: ['', Validators.required],
      moneyDesc: ['', Validators.required],
      rewards: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      video: ['', Validators.required],
    })
  }
}
