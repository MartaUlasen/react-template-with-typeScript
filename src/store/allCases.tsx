import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import httpService from 'services';
import { IRootDispatch} from './index';

interface ICharacter {
    id: number;
    name: string;
    description: string;
};

interface ICharacterList {
    count: number;
    limit: number;
    offset: number;
    results: ICharacter[];
    total: number;
}

export type ICharactersState = {
    isLoading: boolean;
    data?: ICharacterList;
    error?: string;
};

export const initialState: ICharactersState = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const charactersModule = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        requestCharacters: (state) => {
            state.isLoading =  true;
        },
        requestCharactersSuccess: (state, action: PayloadAction<ICharacterList>) => {
            state.isLoading =  false;
            state.data =  action.payload;
        },
        requestCharactersError: (state, action: PayloadAction<string>) => {
            state.isLoading =  false;
            state.error =  action.payload;
        },
    }
});

const { actions, reducer } = charactersModule;

const fetchCharacters = () => {
    return (dispatch: IRootDispatch) => {
        dispatch(actions.requestCharacters());
        return httpService.get('all')
            .then(response => {
                console.log(response.data);
                dispatch(actions.requestCharactersSuccess(response.data))
            })
            .catch(error => dispatch(actions.requestCharactersError(error)))
    }
}

export const thunks = {
    fetchCharacters,
};

export {actions};

export default reducer;

/* function shouldFetchFilms(state) {
    const length = state.films.data.length;
    return !length;
}

export function fetchFilmsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchFilms(getState())) {
            return dispatch(fetchFilms())
        }
    }
} */