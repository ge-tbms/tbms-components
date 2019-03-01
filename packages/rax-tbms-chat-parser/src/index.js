"use strict";
import { createElement, Component } from "rax";
import { _, Middleware } from "tbms-util";
import baseParse from './parse';

export default new Middleware([baseParse]);
