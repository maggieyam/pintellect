
import * as APIUtil from '../utils/pins_api_util';
import {closeModal} from './modal_actions';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

const receivePins = (pins) => ({
  type: RECEIVE_PINS,
  pins,
});

const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin,
});

const removePin = (pinId) => ({
  type: REMOVE_PIN,
  pinId,
});

export const createPin = (pin) => (dispatch) => {
    debugger
  return APIUtil.createPin(pin).then((pin) => {
    return dispatch(receivePin(pin));
  });
};
export const deletePin = (pinId) => (dispatch) =>
  APIUtil.deletepin(pinId).then(() => dispatch(removePin(pinId)));

export const requestPins = () => (dispatch) =>
  APIUtil.fetchpins().then((pins) => {
    return dispatch(receivePins(pins));
  });

export const requestPin = (pinId) => (dispatch) => {
  return APIUtil.fetchpin(pinId).then((pin) =>
    dispatch(receivePin(pin))
  );
};

export const updatePin = (pin) => (dispatch) => {
  return APIUtil.updatepin(pin).then((pin) =>
    dispatch(receivePin(pin))
  );
  // .then(() => closeModal());
};