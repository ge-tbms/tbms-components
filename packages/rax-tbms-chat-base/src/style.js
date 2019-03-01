/**
 * @namespace
 * @name CUSTOM_STYLE
 * @description 样式配置文件
 *
 * @property {Object} font                                              字体
 * @property {String} [font.mainFontSize = 28]                          主体字号
 * @property {String} [font.mainFontColor = #333]                       主体字体颜色
 * @property {String} [font.mainFontLineHeight = 34]                    主题字体行高
 * @property {String} [font.subFontSize = 24]                           副体字号
 * @property {String} [font.subFontColor = #999]                        副体字体颜色
 * @property {String} [font.subFontLineHeight = 32]                     副标题行高
 * @property {String} [font.titleFontSize = 32 ]                        标题字号
 * @property {String} [font.titleFontLineHeight = 38]                   标题行高
 * @property {String} [font.titleFontColor = #000]                      标题颜色
 * @property {String} [font.systemFontSize = 26]                        系统字体字号
 * @property {String} [font.systemFontColor = #FFF]                     系统字体颜色
 * @property {String} [font.systemFontBgColor = rgba(0, 0, 0, 0.12)]    系统背景
 * @property {String} [font.systemFontLineHeight = 42]                  系统行高
 * @property {String} [font.originFontSize = 20]                        来源字号
 * @property {String} [font.originColor = #999]                         来源颜色
 *
 * @property {Object} border                                            边框
 * @property {String} [border.mainBorderRadius = 24]                    主边框圆角
 * @property {String} [border.mainBorderWidth = 0]                      主边框宽度
 * @property {String} [border.mainBorderColor = #FFF]                   主边框颜色
 * @property {String} [bodre.subBorderColor = #999999]                  次边框颜色
 * @property {String} [border.imageBorderRadius = 6]                    图片圆角
 * @property {String} [border.avatorBorderRadius = 24]                  头像边框圆角
 * @property {String} [border.systemBorderRadius = 12]                  系统边框圆角
 *
 * @property {Object} color                                             颜色
 * @property {String} [color.themeColor = #FF5000]                      主题色
 * @property {String} [color.linearGradientColor = linear-gradient(to top right, #FF9901, #FE560A)]                   主题色线性渐变色
 *
 * @property {Object} padding
 * @property {String} [padding.systemPadding = 16]                       系统内边距
 */

export const CUSTOM_STYLE = {
  font: {
    mainFontSize: 28,
    mainFontColor: '#333333',
    mainFontLineHeight: 34,
    subFontSize: 24,
    subFontColor: '#999999',
    subFontLineHeight: 32,
    titleFontSize: 32,
    titleFontColor: '#000000',
    titleFontLineHeight: 38,
    systemFontSize: 26,
    systemFontColor: '#FFFFFF',
    systemFontLineHeight: 42,
    systemFontBgColor: 'rgba(0, 0, 0, 0.12)',
    originFontSize: 20,
    originFontColor: '#999999'
  },
  border: {
    mainBorderRadius: 24,
    mainBorderWidth: 0,
    mainBorderColor: '#FFFFFF',
    subBorderColor: '#999999',
    imageBorderRadius: 6,
    avatorBorderRadius: 24,
    systemBorderRadius: 12
  },
  color: {
    themeColor: '#FF5000',
    bubbleBackgroundColor: '#FFE62C',
    linearGradientColor: 'linear-gradient(to top right, #FF9901, #FE560A)'
  },
  padding: {
    systemPadding: 16
  }
};


/**
 * @namespace
 * @name SYSTEM_SYTLE
 * @description 系统保留变量
 * @property {String} [containerBackgroundColor = #E5E5E5]      主体背景
 * @property {String} [containerFooterBackgroundColor = #F2F2F2] 底部输入框颜色
 * @property {Number} [containerPadding = 24]                   主体内边距
 * @property {Number} [containerNickFontSize = 24]              主题字号
 * @property {String} [containerNickFontColor = #666]           主题字体颜色
 * @property {String} [containerMainBorderRadius = 24]          系统标准圆角
 * @property {Number} [avatorRectangle = 80]                    头像宽高
 * @property {Number} [avatorMarginRight = 20]                  头像右外边距
 * @property {Number} [itemMarginTop = 40]                      消息主体外上边距
 * @property {Number} [itemWidth = 588]                         消息主体宽度
 * @property {Number} [itemMainWidth = 488]                     消息右侧主容器宽度
 * @property {Number} [itemContentWidth = 448]                  消息主题内容宽度
 * @property {Number} [itemMainPadding = 20]                    消息主题内边距
 * @property {String} [itemBackgroundColor= #FFF ]              消息主题背景色
 * @property {Number} [itemContentMarginTop = 6]                消息内容外上边距
 * @property {Number} [cardTitleHeight = 88]                    卡片标题高度
 * @property {Number} [cardContainerPaddingBottom = 0]          卡片底部内边距
 * @property {Number} [footCardOriginHeight = 50]               卡片底部来源高度
 * @property {String} [cardFontColor = #FFF]                    卡片字体颜色
 * @property {Number} [mainButtonHeight = 50]                   主按钮高度
 * @property {Number} [mainButtonFontSize = 28]                 主按钮字体大小
 * @property {String} [mainButtonFontColor = #FFF]              主按钮颜色
 * @property {Number} [originAvatorRectangle = 20]              来源图片宽高
 * @property {Number} [originAvatorMarginLeft = 8]              来源文字外边距
 * @property {Number} [pluginRectangle = 60]                    插件图片大小
 * @property {Number} [pluginContainerHeight = 430]             插件容器高度
 * @property {Number} [pluginPadding = 40]                      插件内边框
 * @property {Number} [pluginContainerBorderColor = #D2D2D2]    插件容器边框颜色
 * @property {Number} [pluginContainerFontColor = #666]         插件容器颜色
 *
 */
export const SYSTEM_STYLE = {
  containerBackgroundColor: '#E5E5E5',
  containerFooterBackgroundColor: '#F2F2F2',
  containerPadding: 24,
  containerMainBorderRadius: 24,
  containerNickFontSize: 24,
  containerNickFontColor: '#666666',
  avatorRectangle: 80,
  avatorMarginRight: 20,
  itemMarginTop: 40,
  itemMainFontColor: '#3333333',
  itemWidth: 588,
  itemMainWidth: 488,
  itemBackgroundColor: '#FFFFFF',
  itemContentWidth: 448,
  itemContentMarginTop: 6,
  itemMainPadding: 20,
  footCardOriginHeight: 50,
  cardTitleHeight: 88,
  mainButtonHeight: 50,
  mainButtonFontSize: 28,
  mainButtonFontColor: '#FFFFFF',
  cardContainerPaddingBottom: 0,
  cardFontColor: '#FFFFFF',
  originAvatorRectangle: 20,
  originAvatorMarginLeft: 8,
  pluginRectangle: 60,
  pluginContainerHeight: 430,
  pluginPadding: 40,
  pluginContainerBorderColor: '#D2D2D2',
  pluginContainerFontColor: '#666666'
};
SYSTEM_STYLE['itemMainWidth'] = SYSTEM_STYLE['itemWidth'] - SYSTEM_STYLE['avatorRectangle'] - SYSTEM_STYLE['avatorMarginRight'];
SYSTEM_STYLE['itemContentWidth'] = SYSTEM_STYLE['itemMainWidth'] - 2 * SYSTEM_STYLE['itemMainPadding'] - 2 * CUSTOM_STYLE['border']['mainBorderWidth'];