  import { createElement, BaseComponent, systemStyles, customStyles } from 'rax-tbms-chat-base';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import ScrollView from 'rax-scrollview';
import { ww } from './map'
import cloneDeep from 'lodash/cloneDeep';

const MY_FREE_STYLE = {
  containerHeight: systemStyles.pluginContainerHeight,
  footContainerHeight: 80,
  BodyContainerHeight: systemStyles.pluginContainerHeight - 80,
  containerTitleHeight: 30,
  containerTitleMarginTop: 20,
  containerTitlePaddingLeft: 40,
  containerBodyPadding: 10,
  containerBodyPaddingRight: 30,
  emojiImageRectangle: 60,
  emojiImagePadding: 4,
  emojiImageMargin: 28,
  pluginIconRectangle: 40,
  pluginBorderColor: '#E7E7E7',
  buttonWidth: 140
}

const EMOJI_MAP = {
  ww: ww
}

const EMOJI_LIST = {
  ww: {
    active: false,
    defaultUrl: 'https://img.alicdn.com/tfs/TB1oW1mwYPpK1RjSZFFXXa5PpXa-200-200.png',
    activeUrl: 'https://gw.alicdn.com/tfs/TB1o6mtwVzqK1RjSZFCXXbbxVXa-200-200.png'
  },
  // xm: {
  //   active: false,
  //   defaultUrl: 'https://gw.alicdn.com/tfs/TB1019rwVzqK1RjSZSgXXcpAVXa-200-200.png',
  //   activeUrl: 'https://gw.alicdn.com/tfs/TB1nQ1nw6TpK1RjSZKPXXa3UpXa-200-200.png',
  // }
}
/**
 * @class
 * @name EmojiPlugin
 * Emoji表情插件
 * @property {Object} props
 * @property {String} props.type          - ww, xm, ww_en
 *
 */
export default class extends BaseComponent {
  static defaultProps = {
    onChange: () => {},
    onSend: () => {}
  }

  state = {
    EMOJI_MAP: EMOJI_LIST,
    type: 'ww'
  }

  styles = {
    container: {
      height: systemStyles.pluginContainerHeight,
      width: 750,
      backgroundColor: systemStyles.containerFooterBackgroundColor,
      borderTopWidth: 1,
      borderColor: '#DDD'
    },
    containerTlt: {
      height: MY_FREE_STYLE.containerTitleHeight,
      lineHeight: MY_FREE_STYLE.containerTitleHeight,
      marginTop: MY_FREE_STYLE.containerTitleMarginTop,
      paddingLeft:  MY_FREE_STYLE.containerTitlePaddingLeft,
      fontSize: customStyles.font.subFontSize,
      color: customStyles.font.subFontColor
    },
    containerScroll: {
      width: 750,
      height: MY_FREE_STYLE.BodyContainerHeight,
    },
    containerBody: {
      paddingRight: MY_FREE_STYLE.containerBodyPaddingRight,
      paddingLeft: MY_FREE_STYLE.containerBodyPadding,
      paddingBottom: MY_FREE_STYLE.containerBodyPadding,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    EmojiImageItem: {
      height: MY_FREE_STYLE.emojiImageRectangle,
      width: MY_FREE_STYLE.emojiImageRectangle,
      paddingLeft: MY_FREE_STYLE.emojiImagePadding,
      paddingRight: MY_FREE_STYLE.emojiImagePadding,
      paddingBottom: MY_FREE_STYLE.emojiImagePadding,
      paddingTop: MY_FREE_STYLE.emojiImagePadding,
      marginLeft: MY_FREE_STYLE.emojiImageMargin,
      marginTop: MY_FREE_STYLE.emojiImageMargin
    },
    pluginItem: {
      height: MY_FREE_STYLE.pluginIconRectangle,
      width: MY_FREE_STYLE.footContainerHeight,
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 1,
      borderLeftColor: MY_FREE_STYLE.pluginBorderColor,
    },
    pluginItemIcon: {
      height: MY_FREE_STYLE.pluginIconRectangle,
      width: MY_FREE_STYLE.pluginIconRectangle,
    },
    containerFoot: {
      width: 750,
      height: MY_FREE_STYLE.footContainerHeight,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFF',

    },
    containerFootLeft: {
      flexDirection: 'row',
      height: MY_FREE_STYLE.footContainerHeight,
      alignItems: 'center',
      marginLeft: -2
    },
    containerFootRight: {
      backgroundImage: customStyles.color.linearGradientColor,
    },
    sendBtn: {
      height: MY_FREE_STYLE.footContainerHeight,
      lineHeight: MY_FREE_STYLE.footContainerHeight,
      width: MY_FREE_STYLE.buttonWidth,
      textAlign: 'center',
      fontSize: customStyles.font.titleFontColor,
      color: systemStyles.mainButtonFontColor
    }
  }
  constructor(props) {
    super(props);
    // 初始化选中状态
    this.state.type = props.type || 'ww';
    this.state.EMOJI_MAP = this.handleActivedToMap(this.state.type);
  }
  handleActivedToMap = (value) => {
    const keyList = Object.keys(this.state.EMOJI_MAP);
    const emojiMap = cloneDeep(this.state.EMOJI_MAP);
    const list = keyList.map(key => {
      if (value === key) {
        emojiMap[key].active = true;
      } else {
        emojiMap[key].active = false;
      }
    })

    return emojiMap;
  }
  handlePluginItemClick = (value) => {
    this.setState({
      EMOJI_MAP: this.handleActivedToMap(value),
      type: value
    })
  }
  handleEmojiItemClick = (word) => {
    this.props.onChange && this.props.onChange(word.alias, this.state.type);
  }
  handleSend = () => {
    this.props.onSend && this.props.onSend();
  }
  renderBody() {
    const list = EMOJI_MAP[this.state.type];
    const styles = this.styles;
    const prefix = this.state.type;

    const ImageList = list.map(word => {
      return <Image source={{uri: word.src}}
        style={styles.EmojiImageItem}
        resizeMode="cover"
        onClick={this.handleEmojiItemClick.bind(this, word)}
      />
    });

    return <View style={styles.containerBody}>{ImageList}</View>

  }
  renderFoot() {
    const styles = this.styles;
    const keyList = Object.keys(this.state.EMOJI_MAP);
    const EMOJI_LIST = this.state.EMOJI_MAP;
    return <View style={styles.containerFoot}>
        <View style={styles.containerFootLeft}>
          {
            keyList.map(key => {
              let item = EMOJI_LIST[key];
              return <View style={styles.pluginItem}>
                <Image source={{uri: item.active ? item.activeUrl : item.defaultUrl}}
                  style={styles.pluginItemIcon}
                  resizeMode="cover"
                  onClick={this.handlePluginItemClick.bind(this, key)}
                />
              </View>
            })
          }
        </View>
        <View style={styles.containerFootRight} onClick={this.handleSend}>
          <Text style={styles.sendBtn}>发送</Text>
        </View>
    </View>
  }

  render() {
    const styles = this.styles;
    return <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <Text style={styles.containerTlt}>全部表情</Text>
        {this.renderBody()}
      </ScrollView>
      {this.renderFoot()}
      </View>
  }
}
