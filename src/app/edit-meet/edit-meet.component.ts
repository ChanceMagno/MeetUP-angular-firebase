import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Meet } from '../meet.model';
import { MeetService } from '../meet.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-meet',
  templateUrl: './edit-meet.component.html',
  styleUrls: ['./edit-meet.component.css']
})
export class EditMeetComponent implements OnInit {

  meetId: string;
  selectedMeet: Meet;
  meetForm: FormGroup;
  Materialize:any;
  selectedGoal: number;
  warnAction = new EventEmitter;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private meetService: MeetService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetId = urlParameters['id'];
      console.log(urlParameters);
    });

    this.meetService.getMeetById(this.meetId).subscribe(dataLastSeen => {
      console.log(this.meetId, "second");
      this.selectedMeet = new Meet(
        dataLastSeen.title,
        dataLastSeen.location,
        dataLastSeen.time,
        dataLastSeen.date,
        dataLastSeen.creator,
        dataLastSeen.image,
        dataLastSeen.info,
        dataLastSeen.attendingGoal)
    })
  }

    showGoal(goal){
      this.selectedGoal = goal;
    }

    update(title, location, time, date, creator, image, info, attendingGoal){
      if(title.length < 2 || location.length < 2 || info.length < 2 || time.length < 2 || date.length < 2 || creator.length < 2 || image.length < 2 || attendingGoal.length < 1) {
        this.warnModal();
      } else{
        var updatedMeet = new Meet(title, location, time, date, creator, image, info, attendingGoal);
        this.meetService.updateMeet(updatedMeet, this.meetId);
        this.router.navigate(['meets/', this.meetId])
        }
    }

    warnModal() {
    this.warnAction.emit({action:"modal",params:['open']});
    }

  }
