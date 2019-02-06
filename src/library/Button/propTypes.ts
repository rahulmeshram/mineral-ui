/* @flow */
import { bool, element, func, node, oneOf, string } from 'prop-types';
import { enumToArray } from '../utils';
import { SIZE, VARIANT } from './constants';

export const buttonPropTypes = {
  children: node,
  circular: bool,
  disabled: bool,
  fullWidth: bool,
  iconEnd: element,
  iconStart: element,
  minimal: bool,
  onClick: func,
  primary: bool,
  size: oneOf(enumToArray(SIZE)),
  type: string,
  variant: oneOf(enumToArray(VARIANT))
};
