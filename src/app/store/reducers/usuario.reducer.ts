import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  Rerror: any;
}

const estadoInicial: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  Rerror: null
};


export function usuarioReducer( state = estadoInicial, action: fromUsuario.ususarioActions): UsuarioState {
  switch ( action.type ) {
    case fromUsuario.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        Rerror: null
      };
    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: {...action.usuario}
      };
    case fromUsuario.CARGAR_USUARIO_FAIL:
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
