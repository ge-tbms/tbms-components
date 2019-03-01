/**
 * ----------------------------------
 * @file index.js
 * @desc text
 * @create: 2018/6
 * ----------------------------------
 */
import {createElement, BaseComponent, customStyles, systemStyles } from '@ali/rax-tbms-chat-base';
import View from 'rax-view';

export default class extends BaseComponent {
  styles = {
    container: {
      display: 'inline'
    },
    image: {
      display: 'inline'
    },
    text: {
      display: 'inline',
      wordBreak: 'break-word',
      fontSize: customStyles.font.mainFontSize,
      lineHeight: customStyles.font.mainFontSize,
      color: customStyles.font.mainFontColor
    }
  }
  render() {
    const styles = this.styles;
    return <View style={styles.container}>{this.props.content}</View>
  }
}
