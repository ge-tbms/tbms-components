/**
 * ----------------------------------
 * @file index.js
 * @desc system
 * @create: 2018/6
 * ----------------------------------
 */
import {createElement, BaseComponent, systemStyles, customStyles} from 'rax-tbms-chat-base';
import Text from 'rax-text';
import View from 'rax-view';


/**
 * @class
 * @name tbms-system 基础组件 - 系统消息
 * @property {Object} props              属性
 * @property {String} props.content
 */
export default class extends BaseComponent {
  styles = {
    text: {
      paddingLeft: customStyles.padding.systemPadding,
      paddingRight: customStyles.padding.systemPadding,
      borderRadius: customStyles.border.mainBorderRadius === 0 ? 0 : customStyles.border.systemBorderRadius * ( customStyles.border.mainBorderRadius / systemStyles.containerMainBorderRadius ),
      fontSize: customStyles.font.systemFontSize,
      color: customStyles.font.systemFontColor,
      backgroundColor: customStyles.font.systemFontBgColor,
      maxWidth: systemStyles.itemWidth,
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    container: {
      height: customStyles.font.systemFontLineHeight,
      lineHeight: customStyles.font.systemFontLineHeight,
      marginTop: systemStyles.itemMarginTop,
      flexDirection: 'row',
      justifyContent: 'center'
    }
  }
  render() {
    const styles = this.styles;
    return <View style={styles.container}><Text style={styles.text} numberOfLines={1}>{this.props.content}</Text></View>
  }
}
