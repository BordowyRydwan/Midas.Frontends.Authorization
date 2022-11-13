import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { APP_BASE_HREF } from "@angular/common";
import { LogoutComponent } from "./views/logout/logout.component";
import { SessionGuard } from "./guards/session.guard";

const routes: Routes = [
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent, canActivate: [ SessionGuard ]},
  { path: 'auth/register', component: RegisterComponent, canActivate: [ SessionGuard ] },
  { path: 'auth/logout', component: LogoutComponent, canActivate: [ SessionGuard ] },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
