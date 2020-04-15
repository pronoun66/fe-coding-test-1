import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import axios from 'axios';

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export namespace ControlActions {
  export enum Type {
    LOAD_CONTROLS = 'LOAD_CONTROLS',
    LOAD_CONTROLS_ERROR = 'LOAD_CONTROLS_ERROR',
  }

  export const loadControls = () => (dispatch: any) => {
    return sleep(1000).then(() => {
      axios.get('assets/controls1.json')
        .then(result => {
          const {data: {data: controls}} = result;
          dispatch({
            type: Type.LOAD_CONTROLS,
            payload: controls
          })
        })
        .catch(error => {
          console.log('loadControls error', error);

          dispatch({
            type: Type.LOAD_CONTROLS_ERROR,
            payload: error
          })
        })
    })
  }
}

export type ControlActions = Omit<typeof ControlActions, 'Type'>;
export const useControlActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = ControlActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ControlActions;
};
