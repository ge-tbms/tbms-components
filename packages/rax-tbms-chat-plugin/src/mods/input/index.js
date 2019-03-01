import { createElement, BaseComponent, systemStyles, customStyles } from 'rax-tbms-chat-base';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import Image from 'rax-image';
import IconSource from './icon';

const MY_FREE_STYLES = {
  containerHeight: 100,
  containerInputHeight: 72,
  inputPadding: 5,
  iconMargin: 20,
  pluginIconAddMargin: 30,
  pluginButtonMarginRight: -10,
  pluginButtonAddWidth: 30
};

export default class extends BaseComponent {
  static defaultProps = {
    onPluginChange: () => {},
    onFocus: () => {},
    showPlugin: false
  }
  styles = {
    container: {
      height: 100,
      paddingLeft: systemStyles.containerPadding,
      paddingRight: systemStyles.containerPadding,
      width: 750,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: systemStyles.containerFooterBackgroundColor
    },
    containerInput: {
      height: MY_FREE_STYLES.containerInputHeight,
      lineHeight: MY_FREE_STYLES.containerInputHeight - MY_FREE_STYLES.inputPadding * 2,
      flex: 1,
      borderRadius: customStyles.border.mainBorderRadius === 0 ? 0 : (MY_FREE_STYLES.containerInputHeight / 2),
      paddingTop: MY_FREE_STYLES.inputPadding,
      paddingLeft: MY_FREE_STYLES.iconMargin,
      paddingRight: MY_FREE_STYLES.iconMargin * 4,
      fontSize: customStyles.font.mainFontSize,
      color: systemStyles.itemMainFontColor,
      textAlign: 'left',
      backgroundColor: '#FFF'
    },
    pluginItem: {
      height: systemStyles.pluginRectangle,
      lineHeight: systemStyles.pluginRectangle,
      width: systemStyles.pluginRectangle,
      fontSize: systemStyles.pluginRectangle,
      marginLeft: MY_FREE_STYLES.iconMargin,
      color: customStyles.font.mainFontColor
    },
    pluginButton: {
      color: customStyles.font.systemFontColor,
      textAlign: 'center',
      fontSize: systemStyles.mainButtonFontSize,
      width: systemStyles.pluginRectangle + MY_FREE_STYLES.pluginButtonAddWidth,
      marginRight: MY_FREE_STYLES.pluginButtonMarginRight,
      backgroundImage: customStyles.color.linearGradientColor,
    },
    pluginEmojiItem: {
      display: 'block',
      position: 'absolute',
      right: systemStyles.containerPadding + systemStyles.pluginRectangle + MY_FREE_STYLES.pluginIconAddMargin,
      width: systemStyles.pluginRectangle
    },
    pluginMoreItem: {
      marginRight: 0
    }

  }

  handleChangeText(value) {
    this.props.onChange && this.props.onChange(value);
  }

  handleSubmitText(event, value) {
    event.target.value = '';
    this.props.onSubmit && this.props.onSubmit(value);
  }

  handlePluginChange = (type) => {
    this.props.onPluginChange && this.props.onPluginChange(type);
  }

  handleKeyUp = (event) => {
    const value = event.target.value;
    if (event.keyCode === 13 && value) {
      this.handleSubmitText(event, value);
    }
  }

  handleBlur = (event) => {
    const value = event.target.value;
    if (value) {
      this.handleChangeText(value)
    }
  }

  constructor(props) {
    super(props);
    if (!props.showPlugin) {
      this.styles.pluginEmojiItem.right += MY_FREE_STYLES.iconMargin
    }
    this.state = {};
  }
  renderEmojiPlugin() {
    const styles = this.styles;

    return <Image source={{uri: IconSource.EMOJI_ICON}}
      style={[styles.pluginItem, styles.pluginEmojiItem]}
      resizeMode="cover"
      onClick={this.handlePluginChange.bind(this, 'emoji')}
    />;
  }

  renderAddPlugin() {
    const styles = this.styles;

    return <Image source={{uri: IconSource.MORE_ICON}}
      style={[styles.pluginItem, styles.pluginMoreItem]}
      resizeMode="cover"
      onClick={this.handlePluginChange.bind(this, 'add')}
    />;
  }

  renderSendButton() {
    const styles = this.styles;
    return <Text style={[styles.pluginItem, styles.pluginButton]} onClick={(event) => {this.handleSubmitText(event)}}>发送</Text>
  }

  render() {
    const styles = this.styles;

    return <View style={styles.container} >
      <TextInput
        autoFocus
        onFocus={this.props.onFocus}
        defaultValue={this.props.text}
        style={styles.containerInput}
        onKeyup={this.handleKeyUp}
        onBlur={this.handleBlur}
      />
      {this.renderEmojiPlugin()}
      {this.props.showPlugin ? this.renderAddPlugin() : this.renderSendButton()}
    </View>;
  }
}
