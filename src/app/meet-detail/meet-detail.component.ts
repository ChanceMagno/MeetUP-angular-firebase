import { Component, OnInit } from '@angular/core';
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

  constructor(    private route: ActivatedRoute, private location: Location, private meetService: MeetService, private router: Router,) { }

  ngOnInit() {
    
  }

}
