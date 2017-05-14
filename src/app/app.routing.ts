import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewMeetComponent } from './new-meet/new-meet.component';
import { MeetDetailComponent } from './meet-detail/meet-detail.component';
import { EditMeetComponent } from './edit-meet/edit-meet.component';


const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
  {
    path: 'about',
    component: AboutComponent
  },
    {
      path: 'new-meet',
      component: NewMeetComponent
    },
    {
      path: 'meets/:id',
      component: MeetDetailComponent
    },
    {
      path:'update/:id',
      component: EditMeetComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
