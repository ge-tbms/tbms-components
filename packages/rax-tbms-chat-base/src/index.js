/** @jsx createElement */

import {createElement, Component, PureComponent, findDOMNode, render} from 'rax';
import {CUSTOM_STYLE, SYSTEM_STYLE } from './style';
import merge from 'lodash/merge';


class BaseComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
}

let systemStyles = SYSTEM_STYLE;
let customStyles = CUSTOM_STYLE;
const setSystemStyle = function(styles) {
  systemStyles = merge({}, systemStyles, styles);
};

const setCustomStyle = function(styles) {
  customStyles = merge({}, customStyles, styles);
};

export {
  BaseComponent,
  createElement,
  setSystemStyle,
  setCustomStyle,
  systemStyles,
  customStyles,
  findDOMNode,
  render
};
