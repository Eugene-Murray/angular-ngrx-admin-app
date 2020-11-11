import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShellComponent } from './user-shell/user-shell/user-shell.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const userRoutes: Routes = [
  { path: '', component: UserShellComponent }
];

@NgModule({
  declarations: [UserShellComponent, UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    //StoreModule.forFeature('user', userReducer),
    //EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
