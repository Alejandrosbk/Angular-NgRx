import { ItemModel } from "@core/models/item.interface";
import { createReducer, on } from "@ngrx/store";
import { loadItems } from "../actions/items.actions";

// TODO: Estado inicial
export const initialState: {
    loading: boolean,
    items: ReadonlyArray<ItemModel>,
} = { loading: false, items: [] };

// TODO: Declaracion de funciones puras
export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (state) => {
        return { ...state, loading: true };
    }),
);

