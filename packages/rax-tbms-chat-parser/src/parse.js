/**
 * ----------------------------------
 * @file parse.js
 * @desc 组件解析模块
 * @author Matrix 
 * @create: 2019/02
 * ----------------------------------
 */
import merge from 'lodash/merge';
import { createElement, Component, render } from 'rax';
import { TextMsg, ImageMsg, SystemMsg } from 'rax-tbms-chat-basemsg';
import { leftChatItemHOC, rightChatItemHOC } from 'rax-tbms-chat-item';

/**
 * 基础消息解析模板
 * @param {object} ctx
 * @param {Object} ctx.message    消息
 * @param {Object} ctx.ItemComponent 组件
 */
export default function (ctx) {
  const msg = ctx.message;
  let message = merge({ type: msg.type }, msg);
  // 插入中间件机制
  switch (msg.type) {
    case 'text':
      ctx.message = merge(message, {
        content: msg.content
      })
      // 数据流向
      ctx.ItemComponent = msg.flow === 'in' ? leftChatItemHOC(TextMsg)(ctx.conversation) : rightChatItemHOC(TextMsg)(ctx.conversation);
      break;
    case 'image':
      ctx.message = merge(message, {
        file: {
          url: msg.file.url,
          h: msg.file.h,
          w: msg.file.w
        },
        isFull: true
      })
      // 数据流向
      ctx.ItemComponent = msg.flow === 'in' ? leftChatItemHOC(ImageMsg)(ctx.conversation) : rightChatItemHOC(ImageMsg)(ctx.conversation);
      break;
    case 'system':
      ctx.message = merge(message, {
        content: msg.content
      })
      ctx.ItemComponent = SystemMsg
      break;
    default:
      break;
  }
}
