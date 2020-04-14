import { combineReducers } from 'redux';
import { RootState } from './state';
import { controlReducer } from './controls';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  controls: controlReducer
});
