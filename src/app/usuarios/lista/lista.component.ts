import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.dispatch( new usuariosActions.CargarUsuarios());
    this.store.select('usuarios').subscribe( data => {
      this.usuarios = data.users;
      this.loading = data.loading;
      this.error = data.Rerror;
    });
  }

}
