import React from 'react';

import styles from './Input.module.css';

const Input: React.FC<{
  id: string;
  labelText: string;
  type: string;
  placeholder?: string;
}> = (props) => {
  const toBeReturnedInput =
    props.type !== 'checkbox' ? (
      <div>
        <label htmlFor={props.id}>{props.labelText}</label>
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder ?? ''}
        />
      </div>
    ) : (
      <label className={styles.checkbox}>
        <input type={props.type} id={props.id} name={props.id} />
        <span className={styles.checkbox}>
          <span></span>
        </span>
        <span className={styles.text}>{props.labelText}</span>
      </label>
    );
  return toBeReturnedInput;
};

export default Input;
