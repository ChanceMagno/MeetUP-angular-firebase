import { Component, OnInit } from '@angular/core';
import { Meet } from '../meet.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { MeetService } from '../meet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  meets: FirebaseListObservable<any[]>;

  constructor(private router: Router, private meetService: MeetService) { }

  ngOnInit() {
    this.meets = this.meetService.getMeets();
  }

  viewMeet(clickedMeet) {
  this.router.navigate(['meets', clickedMeet.$key]);
}

  editMeet(clickedMeet) {

    this.router.navigate(['update', clickedMeet.$key])
  }

}
