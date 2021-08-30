import React from 'react';
import style from './block.module.css';
import PropTypes from 'prop-types';

export function Block() {
  return  (
    <>
      <div className={style.wrapper}>
        <div className={style.block}>
          <button className={style.buttonColor}>color</button>
          <button className={style.buttonBgColor}>backgronudColor</button>
        </div>
        <div className={style.indicateBlock}>
          <div className={style.rangesBlock}>
            <input className={style.red} type='range' />
            <input className={style.green} type='range' />
            <input className={style.blue} type='range' />
          </div>
          <div className={style.textBlock} data-id='id'>
            ololoololo lololo ollol 
          </div>
        </div>
      </div>
    </>
  );

}
