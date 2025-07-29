import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { IconsComponent } from '../components/icons/icons.component';
import { LiveCalendarComponent } from '../components/live-calendar/live-calendar.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path:'calendar',
        component: LiveCalendarComponent
    }
];
