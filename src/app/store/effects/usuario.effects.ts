import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { of} from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';


@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}


  @Effect()
  cargarUsuarioo$ = this.actions$.pipe(
    ofType (usuarioActions.CARGAR_USUARIO),
    switchMap( (action: any) => {
      const id = action.id;
      return this.usuarioService.getUserById(id)
        .pipe(
          map( (user: any) => new usuarioActions.CargarUsuarioSuccess(user)),
          catchError( error => of ( new usuarioActions.CargarUsuarioFail(error)))
        );
      })
    );
}
