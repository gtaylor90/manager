import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from './types';

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
