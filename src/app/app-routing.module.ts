import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogInComponent } from './user-log-in/user-log-in.component';

const routes: Routes = [
  {
    path: '',
    component: UserLogInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
