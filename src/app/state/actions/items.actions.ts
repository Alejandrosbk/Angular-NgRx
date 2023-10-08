import { ItemModel } from '@core/models/item.interface';
import { createAction, props } from '@ngrx/store';

// TODO: Accion cargando articulos
export const loadItems = createAction(
    '[Item List] Load items', //TODO: Type de la accion
);

// TODO: Accion cargar articulos fue exitosa
export const loadItemsSuccess = createAction(
    '[Item List] Load items success', //TODO: Type de la accion
    props<{ items: ItemModel[] }>() //TODO: Payload
);