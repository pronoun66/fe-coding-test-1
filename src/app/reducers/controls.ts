import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ControlActions } from 'app/actions/controls';
import { ControlModel } from 'app/models';

const initialState: RootState.ControlState = {
  controls: [],
  error: null
};

export const controlReducer = handleActions<RootState.ControlState, ControlModel[] | any>(
  {
    [ControlActions.Type.LOAD_CONTROLS]: (state, action) => {
      return { ... state, controls: action.payload}
    },
    [ControlActions.Type.LOAD_CONTROLS_ERROR]: (state, action) => {
      return { ... state, error: action.payload}
    }
  },
  initialState
);
