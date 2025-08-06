import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { IconsComponent } from '../components/icons/icons.component';
import { LiveCalendarComponent } from '../components/live-calendar/live-calendar.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: '', 
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: IconsComponent
            },
            {
                path: 'icons',
                component: IconsComponent
            },
            {
                path:'calendar',
                component: LiveCalendarComponent
            },
        ]
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'fogotpassword',
        component: ForgotPasswordComponent
    }
];
