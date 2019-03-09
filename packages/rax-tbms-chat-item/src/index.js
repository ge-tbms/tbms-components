/** @jsx createElement */

'use strict';

import {createElement, Component, PureComponent} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import { customStyles, systemStyles } from 'rax-tbms-chat-base';
/**
 * @class
 * @name ChatItemHOC
 * @description 聊天消息项高阶函数
 */

const AVATOR_LEFT = 'https://gw.alicdn.com/tfs/TB1aRryvSzqK1RjSZFpXXakSXXa-640-640.png'

/**
 * 左侧(对方)消息高阶函数组件
 * - 内容区域 width: 448
 * @param {class} WrappedComponent
 * @memberof ChatItemHOC
 */
const leftChatItemHOC = (WrappedComponent) => conversation => {
  const avator = conversation.touidAvator || AVATOR_LEFT;
  // 样式列表
  const style = {
    container: {
      flexDirection: 'row',
      justContent: 'flex-start',
      maxWidth: systemStyles.itemWidth,
      marginTop: systemStyles.itemMarginTop
    },
    containerAvator: {
      height: systemStyles.avatorRectangle,
      width: systemStyles.avatorRectangle,
      marginRight: systemStyles.avatorMarginRight,
      borderRadius: customStyles.border.avatorBorderRadius
    },
    containerCnt: {
      justifyContent: 'flex-start',
      maxWidth: systemStyles.itemMainWidth,
      overflow: 'hidden',
      display: 'inline-block'
    },
    containerWrapped: {
      borderRadius: customStyles.border.mainBorderRadius,
      borderWidth: customStyles.border.mainBorderWidth,
      borderColor: customStyles.border.mainBorderColor,
      color: customStyles.border.mainFontColor,
      paddingLeft: systemStyles.itemMainPadding,
      paddingRight: systemStyles.itemMainPadding,
      paddingTop: systemStyles.itemMainPadding,
      paddingBottom: systemStyles.itemMainPadding,
      backgroundColor: systemStyles.itemBackgroundColor,
      marginTop: systemStyles.itemContentMarginTop,
      display: 'inline-block',
      textAlign: 'left'
    },
    containerWrappedCard: {
      paddingBottom: systemStyles.cardContainerPaddingBottom,
      display: 'inline-block'
    },
    containerNick: {
      fontSize: systemStyles.containerNickFontSize,
      color: systemStyles.containerNickFontColor,
      textAlign: 'left'
    }
  };
  return class extends PureComponent {
    renderPaddingContainer() {
      return (
        <View style={style.container}>
          <View style={style.containerAvator}>
            <Image source={{uri: avator}} resizeMode="cover" style={style.containerAvator} />
          </View>
          <View style={[style.containerCnt, style.containerLeft]} >
            <Text style={style.containerNick}>{conversation.touid}</Text>
            <View style={[style.containerWrapped, this.props.isCard ? style.containerWrappedCard : null]}>
              <WrappedComponent {...this.props} />
            </View>
          </View>
        </View>
      );
    }
    renderFullContainer() {
      return (
        <View style={style.container}>
          <Image source={{uri: avator}} resizeMode="cover" style={style.containerAvator} />
          <View style={[style.containerCnt, style.containerLeft]}>
            <Text style={style.containerNick}>{conversation.touid}</Text>
            <WrappedComponent {...this.props} />
          </View>
        </View>
      );
    }
    render() {
      if (this.props.isFull) {
        return this.renderFullContainer();
      } else {
        return this.renderPaddingContainer();
      }
    }
  };
};

/**
 * 右侧(自己)消息高阶函数组件
 * @param {class} WrappedComponent
 * @memberof ChatItemHOC
 */
const rightChatItemHOC = (WrappedComponent) => conversation => {
  const avator = conversation.uidAvator || AVATOR_LEFT;
  // 样式列表
  const style = {
    container: {
      flexDirection: 'row-reverse',
      justContent: 'flex-end',
      marginTop: systemStyles.itemMarginTop
    },
    containerAvatorRight: {
      marginLeft: systemStyles.avatorMarginRight,
    },
    containerAvator: {
      height: systemStyles.avatorRectangle,
      width: systemStyles.avatorRectangle,
      borderRadius: customStyles.border.avatorBorderRadius,
      marginLeft: systemStyles.avatorMarginRight
    },
    containerCnt: {
      justifyContent: 'flex-end',
      maxWidth: systemStyles.itemMainWidth,
      overflow: 'hidden',
      display: 'inline-block',
      textAlign: 'right'
    },
    containerWrapped: {
      borderRadius: customStyles.border.mainBorderRadius,
      borderWidth: customStyles.border.mainBorderWidth,
      borderColor: customStyles.border.mainBorderColor,
      color: customStyles.border.mainFontColor,
      paddingLeft: systemStyles.itemMainPadding,
      paddingRight: systemStyles.itemMainPadding,
      paddingTop: systemStyles.itemMainPadding,
      paddingBottom: systemStyles.itemMainPadding,
      backgroundColor: customStyles.color.bubbleBackgroundColor,
      marginTop: systemStyles.itemContentMarginTop,
      display: 'inline-block'
    },
    containerWrappedCard: {
      paddingBottom: systemStyles.cardContainerPaddingBottom,
      display: 'inline-block'
    },
    containerNick: {
      fontSize: systemStyles.containerNickFontSize,
      color: systemStyles.containerNickFontColor,
      textAlign: 'right'
    }
  };
  return class extends PureComponent {
    renderPaddingContainer() {
      return (
        <View style={style.container}>
          <View>
            <Image source={{uri: avator}} resizeMode="cover" style={style.containerAvator} />
          </View>
          <View style={[style.containerCnt, style.containerRight]} >
            <Text style={style.containerNick}>{conversation.uid}</Text>
            <View style={[style.containerWrapped, this.props.isCard ? style.containerWrappedCard : null]}>
              <WrappedComponent {...this.props} />
            </View>
          </View>

        </View>
      );
    }
    renderFullContainer() {
      return (
        <View style={style.container}>
          <View style={[style.containerCnt, style.containerRight]}>
            <Text style={style.containerNick}>{conversation.uid}</Text>
            <WrappedComponent {...this.props} />
          </View>
          <Image source={{uri: avator}} resizeMode="cover" style={style.containerAvator} />
        </View>
      );
    }
    render() {
      if (this.props.isFull) {
        return this.renderFullContainer();
      } else {
        return this.renderPaddingContainer();
      }
    }
  };
};

export {
  leftChatItemHOC,
  rightChatItemHOC
};