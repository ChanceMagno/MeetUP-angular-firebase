import { Injectable } from '@angular/core';
import { Meet } from './meet.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MeetService {
  meets: FirebaseListObservable<any[]>;



  constructor(private database: AngularFireDatabase) {
    this.meets = database.list('meets');
  }

  saveMeet(newMeet: Meet) {
    this.meets.push(newMeet);
  }

  getMeets(){
    return this.meets;
  }


  getMeetById(meetId) {
    return this.database.object('meets/' + meetId);
  }

  deleteMeet(id){
    var meetEntryInFirebase = this.getMeetById(id);
    meetEntryInFirebase.remove();
  }

  updateMeet(meet, meetId){
    var meetInFirebase = this.getMeetById(meetId);
    meetInFirebase.update({
      title: meet.title,
      location: meet.location,
      time: meet.time,
      date: meet.date,
      creator: meet.creator,
      image: meet.image,
      info: meet.info,
      attendingGoal: meet.attendingGoal,
    })
  }

}
