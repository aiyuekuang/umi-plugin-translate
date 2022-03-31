/*
 * @Author: your name
 * @Date: 2021-09-29 10:37:05
 * @LastEditTime: 2022-03-09 11:51:29
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\locales\en-US.ts
 */
import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';
import pages from './en-US/pages';
import columns from './en-US/columns'

export default {
  'navBar.lang':"language"/*语言*/,
  'layout.user.link.help':"help"/*帮助*/,
  'layout.user.link.privacy':"privacy"/*隐私*/,
  'layout.user.link.terms':"Terms"/*条款*/,
  'app.preview.down.block':"Download this page to Local Project"/*下载此页面到本地项目*/,
  'app.welcome.link.fetch-blocks':"Get all blocks"/*获取全部区块*/,
  'app.welcome.link.block-list':"Based on Block development, quickly build standard page"/*基于 block 开发，快速构建标准页面*/,
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...columns
};
