/**
 * ----------------------------------
 * @file index.js
 * @desc text
 * @create: 2018/6
 * ----------------------------------
 */
import {createElement, BaseComponent, customStyles, systemStyles } from 'rax-tbms-chat-base';
import View from 'rax-view';
import { emojiParser } from 'rax-tbms-chat-plugin'
const wwParser = emojiParser('ww')
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
    const richText = wwParser(this.props.content, styles);
    return <View style={styles.container}>{richText}</View>
  }
}
