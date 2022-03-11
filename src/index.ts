// ref:
// - https://umijs.org/plugins/api
import { join } from 'path';
import { IApi } from '@umijs/types';
import TranslateMain from './main';

export default function (api: IApi) {
  const { absNodeModulesPath, absTmpPath,cwd,absSrcPath } = api.paths;
  api.describe({
    key: 'translate',
    config: {
      schema(joi:any) {
        return joi.string();
      },
    },
  });
  api.registerCommand({
    name: 'translate',
    alias: 'tr',
    fn: async ({ args }) => {
      translateFile()
      return `hello ${api.args.projectName}`;
    },
  });

  /** 根据配置文件进行翻译 */
  function translateFile() {
    // @ts-ignore
    const serversFolder = join(absSrcPath,  'locales');

    let translate = new TranslateMain({path:serversFolder,source:serversFolder + "/zh-CN"})
    translate.translateCallback = (type,filename)=>{
      api.logger.log(`翻译：${filename}文件---`,type,"完成")
    }
    translate.run();
  }

}
