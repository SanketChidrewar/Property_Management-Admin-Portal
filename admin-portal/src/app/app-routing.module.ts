import { AdminService } from './auth/admin.service';
import { UserComponent } from './user/user.component';
import { PropertyRequirementListComponent } from './property-requirement-list/property-requirement-list.component';
import { RevenueComponent } from './revenue/revenue.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : "auth",
    loadChildren : ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path : "",
    redirectTo : "/dashboard/properties",
    pathMatch : "full"
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    canActivate : [AdminService],
    children : [
      {
        path : "profile",
        component : ProfileComponent
      },
      {
        path : "properties",
        component : PropertyListComponent
      },
      {
        path : "revenue",
        component : RevenueComponent
      },
      {
        path : "property-requirement",
        component : PropertyRequirementListComponent
      },
      {
        path : "user-details",
        component : UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
