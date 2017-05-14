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

}
