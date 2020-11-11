import { User } from '../../entities/user';
import { createAction, props } from '@ngrx/store';

export const loadUsersSuccess = createAction(
  '[User API] Load Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Fail',
  props<{ error: string }>()
);
