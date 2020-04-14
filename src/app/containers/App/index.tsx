import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import ControlTable from '../../components/ControlTable';


export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  return (
    <div className={style}>
      <Header />
      <div className={style.content}>
        <div className={style.control_table}>
          <ControlTable />
        </div>
      </div>
    </div>
  );

};
