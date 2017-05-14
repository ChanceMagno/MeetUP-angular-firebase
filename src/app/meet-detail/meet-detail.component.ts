import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Meet } from '../meet.model';
import { MeetService } from '../meet.service';

@Component({
  selector: 'app-meet-detail',
  templateUrl: './meet-detail.component.html',
  styleUrls: ['./meet-detail.component.css']
})
export class MeetDetailComponent implements OnInit {

  meetId: string;
  selectedMeet: Meet;
  warnAction = new EventEmitter;

  constructor(private route: ActivatedRoute, private location: Location, private meetService: MeetService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetId = urlParameters['id'];
    });
    this.meetService.getMeetById(this.meetId).subscribe(dataLastSeen => {
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

  warnModal() {
  this.warnAction.emit({action:"modal",params:['open']});
  }

  deleteMeet(){
    this.warnModal();
  }

  deleteVerified(){
    this.meetService.deleteMeet(this.meetId);
  }

  editMeet(){
    this.router.navigate(['update/', this.meetId]);
  }

}
