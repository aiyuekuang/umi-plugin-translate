// ref:
// - https://umijs.org/plugins/api
import { join } from 'path';
import { IApi } from '@umijs/types';

export default function (api: IApi) {
  api.logger.info('use plugin');

  api.modifyHTML(($:any) => {
    $('body').prepend(`<h1>hello umi pludsddddgin</h1>`);
    return $;
  });


  api.describe({
    key: 'mainPath',
    config: {
      schema(joi:any) {
        return joi.string();
      },
    },
  });
}
