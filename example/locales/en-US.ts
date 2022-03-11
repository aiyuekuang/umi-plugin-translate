/*
 * @Author: your name
 * @Date: 2021-09-29 10:37:05
 * @LastEditTime: 2022-03-09 11:51:29
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\locales\zh-CN.ts
 */
import component from './zh-CN/component';
import globalHeader from './zh-CN/globalHeader';
import menu from './zh-CN/menu';
import pwa from './zh-CN/pwa';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import pages from './zh-CN/pages';
import columns from './zh-CN/columns'

export default {
  'navBar.lang':'language ',
  'layout.user.link.help':'  help ',
  'layout.user.link.privacy':'  privacy ',
  'layout.user.link.terms':'  Terms ',
  'app.preview.down.block':'  Download this page to Local Project ',
  'app.welcome.link.fetch-blocks':'  Get all blocks ',
  'app.welcome.link.block-list':'  Based on Block development, quickly build standard page',
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...columns
};
