import { BaseComponent,  createElement, customStyles, systemStyles } from 'rax-tbms-chat-base'
import Image from 'rax-image';

/**
 * @class
 * @name tbms-image 图片基础组件
 * @property {Object} props           属性
 * @property {String} props.text      文字
 */

const fontSize = 2;
export default class extends BaseComponent {
  render() {
    const { file } = this.props;
    if (!this.props.isFull || typeof this.props.file !== 'object') {
      throw new Error('isFull and file property must be setting!');
    }
    const style = {
      height: file.h / fontSize,
      width: file.w / fontSize,
      borderRadius: customStyles.border.mainBorderRadius
    };

    return <Image source={{uri: this.props.file.url}} style={style} resizeMode="cover" />;
  }
}
