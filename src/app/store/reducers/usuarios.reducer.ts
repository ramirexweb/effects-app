import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  Rerror: any;
}

const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  Rerror: null
};


export function usuariosReducer( state = estadoInicial, action: fromUsuarios.ususariosActions): UsuariosState {
  switch ( action.type ) {
    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        Rerror: null
      };
    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.usuarios]
      };
    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        Rerror: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };
    default: return state;
  }
}
