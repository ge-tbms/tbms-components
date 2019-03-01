/**
 * ----------------------------------
 * @file smile.js
 * @desc 旺旺表情
 * @author Matrix <fangbo.fb@alibaba-inc.com>
 * @create: 2018/6
 * ----------------------------------
 */

import {createElement, BaseComponent, customStyles, systemStyles } from '@ali/rax-tbms-chat-base';

import * as SmileConfig from './map';
import Image from 'rax-image';

const MY_FREE_STYLE = {
  text: {
    wordBreak: 'break-word',
    fontSize: customStyles.font.mainFontSize,
    lineHeight: customStyles.font.mainFontLineHeight,
    color: customStyles.font.mainFontColor
  }
}

export default function(configType) {
  const smileList = SmileConfig[configType] || [];
  let smileConfig = {};
  if (!smileList.length) {
    throw new TypeError('smileConfig type not right', configType)
  }

  smileList.forEach(item => {
    smileConfig[item.alias] = {...item};
  });

  return (value, styles, EmojiRectangle = 48) => {
    const reg = /([^\/:]+)|(\/:[\w~!@$%^&*\\(\\)\-\+=\.\?'"<>]{1,5})/gm;
    const emojiReg = /\/:[\w~!@$%^&*\\(\\)\-\+=\.\?'"<>]{1,5}/
    let originList = value.match(reg) || [];
    let list = [];
    originList && originList.forEach(function(text, index) {
      // /:^_^
      // let keys = key.slice(2); // ^_^
      if (emojiReg.test(text) && smileConfig[text] && smileConfig[text].src) {
        list.push(<Image source={{uri: smileConfig[text].src}} style={{height: EmojiRectangle, width: EmojiRectangle, ...styles.image}} resizeMode="cover" />)
      } else {
        list.push(<span style={styles.text}>{text}</span>)
      }
    });

    return list;
  }
}
