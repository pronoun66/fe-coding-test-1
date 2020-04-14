import { ControlModel } from 'app/models';

export interface RootState {
  controls: RootState.ControlState;
  router?: any;
}

export namespace RootState {
  export type ControlState = {
    controls: ControlModel[]
    error?: any
  };
}
