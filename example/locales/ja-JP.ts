/*
 * @Author: your name
 * @Date: 2021-09-29 10:37:05
 * @LastEditTime: 2022-03-09 11:51:29
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\locales\ja-JP.ts
 */
import component from './ja-JP/component';
import globalHeader from './ja-JP/globalHeader';
import menu from './ja-JP/menu';
import pwa from './ja-JP/pwa';
import settingDrawer from './ja-JP/settingDrawer';
import settings from './ja-JP/settings';
import pages from './ja-JP/pages';
import columns from './ja-JP/columns'

export default {
  'navBar.lang':"言語"/*语言*/,
  'layout.user.link.help':"ヘルプ"/*帮助*/,
  'layout.user.link.privacy':"プライバシー"/*隐私*/,
  'layout.user.link.terms':"条項"/*条款*/,
  'app.preview.down.block':"「このページをローカルプロジェクトにダウンロードする」"/*下载此页面到本地项目*/,
  'app.welcome.link.fetch-blocks':"「すべてのブロックを入手」"/*获取全部区块*/,
  'app.welcome.link.block-list':"ブロック開発に基づいて、標準ページを素早く構築する"/*基于 block 开发，快速构建标准页面*/,
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...columns
};
