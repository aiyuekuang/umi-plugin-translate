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
      default:{
        localPath: "zh-CN",
        suffix:'ts',
        translateTypes:[{ type: 'en', fileName: 'en-US' }, { type: 'ja', fileName: 'ja-JP' }],
        from:{ type: 'zh-CN', fileName: 'zh-CN' },
        path:join(absSrcPath,'locales'),
      },
      schema(joi:any) {
        const itemSchema = joi.object({
          suffix:joi.string(),
          translateTypes:joi.array().items({
            type: joi.string(), fileName: joi.string()
          }),
          from:joi.object({
            type: joi.string(), fileName: joi.string()
          }),
          path:joi.string(),
        });
        return joi.alternatives(joi.object(itemSchema), itemSchema);
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
    let translate = new TranslateMain(api.config.openAPI)
    translate.translateCallback = (type,filename)=>{
      api.logger.log(`翻译：${filename}文件---`,type,"完成")
    }
    translate.run();
  }

}
