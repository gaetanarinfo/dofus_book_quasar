/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import lang from 'quasar/lang/fr'

import iconSet from 'quasar/icon-set/material-icons'


import Vue from 'vue'

import {Quasar,Notify,LocalStorage,SessionStorage,Meta,Loading,AppFullscreen} from 'quasar'


Vue.use(Quasar, { config: {"notify":{},"loading":{}},lang: lang,iconSet: iconSet,plugins: {Notify,LocalStorage,SessionStorage,Meta,Loading,AppFullscreen} })
