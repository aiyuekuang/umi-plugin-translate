import fs from 'fs';
import { join } from 'path';
// @ts-ignore
import translate from '@vitalets/google-translate-api';


export default class TranslateMain {

  static propTypes = {};

  translateTypes = [{ type: 'en', fileName: 'en-US' }, { type: 'ja', fileName: 'ja-JP' }];
  index = 0;
  symbol = '\n';
  suffix = 'ts';
  path = './src/components/locales/';
  file: any = null;
  outputFileName = [];
  from = { type: 'zh-CN', fileName: 'zh-CN' };
  fixedTranslate: any = null;
  /** 需要翻译的文本 */
  translateString: any = [];
  /** 翻译完成的回调*/
  translateCallback= (type: string, fileName: string | string | undefined)=>{

  }

  static defaultProps = {
    /** 查看类型*/
    translateTypes: ['en'],
    /** 输出的语言文件的后缀名*/
    suffix: 'ts',
    /** 输出的语言文件相对项目根目录的地址 */
    path: './src/components/locales/',
    /** 输出文件的其他名称设置，与上方translateTypes的数组一一对应即可，注意必须保持一致*/
    outputFileName: [],
    /** 翻译源文件的语言简码*/
    from: { type: 'zh-CN', fileName: 'zh-CN' },
    /** 固定人工翻译的字段集合，如{en:{head:"tou"}}，结构语言->字段*/
    fixedTranslate: null,
  };

  constructor(config: any) {
    if (config.translateTypes) {
      this.translateTypes = config.translateTypes;
    }
    if (config.suffix) {
      this.suffix = config.suffix;
    }
    if (config.path) {
      this.path = config.path;
    }
    if (config.outputFileName) {
      this.outputFileName = config.outputFileName;
    }
    if (config.from) {
      this.from = config.from;
    }
    if (config.fixedTranslate) {
      this.fixedTranslate = config.fixedTranslate;
    }
    if (config.fixedTranslate) {
      this.fixedTranslate = config.fixedTranslate;
    }


    /** 获中文所有文件信息*/
    for (let i of this.getAllFile()) {
      let text = this.getTranslateString(i.file);

      this.translateString.push({
        ...i,
        text: text,
        textArr: text.split('\n'),
      });
    }

  }

  async run() {
    for (let t of this.translateTypes) {
      for (let i of this.translateString) {
        if (i.text && i.text !== '') {
          await translate(i.text, { from: this.from.type, to: t.type }).then((data: any) => {
            let textArrNew = data.text.split('\n');
            let fileTemp = i.fileOrg;
            /** 根据返回的字符进行数组的拆分*/
            for (let s of i.textArr.keys()) {
              if (i.textArr[s]) {
                // i.textArr[s] = i.textArr[s].replace(/'/g,"")
                textArrNew[s] = '\'' + textArrNew[s].replace(/'/g, '') + '\'';
                fileTemp = fileTemp.replace(i.textArr[s], textArrNew[s]);
              }
            }
            this.translateCallback(t.type,i.fileName)
            fs.writeFile(i.isRoot ? this.path + '/' + t.fileName + '.' + this.suffix : this.path + '/' + t.fileName + '/' + i.fileName, fileTemp, { encoding: 'utf8' }, err => {
            });
          }).catch((e)=>{
            console.log("翻译错误")
          });
        }
      }
    }
  }

  objectLoop(obj: any, fun: any) {
    for (let i in obj) {
      if (typeof (obj[i]) === 'object') {
        this.objectLoop(obj[i], fun);
      } else {
        fun(obj, i);
      }
      this.index++;
    }
  }

  /** 获取所有的翻译文件*/
  getAllFile() {
    let pathName = this.path + '/' + this.from.type;

    let fileMap: any = [{
      position: this.path,
      file: pathName + '.' + this.suffix,
      isRoot: true,
      fileName: this.from.type + '.' + this.suffix,
      /** 读取并保存原始的文件 */
      fileOrg: fs.readFileSync(pathName + '.' + this.suffix, 'utf-8'),
    }];

    // this.file = this.file.split('export default')[1];
    // this.file = (new Function('return ' + this.file))();

    function finder(path: any) {
      let files = fs.readdirSync(path);
      files.forEach((val, index) => {

        let fPath = join(path, val);

        let stats = fs.statSync(fPath);

        if (stats.isDirectory()) finder(fPath);

        if (stats.isFile()) fileMap.push({
          position: pathName,
          file: fPath,
          isRoot: false,
          fileName: val,
          /** 读取并保存原始的文件 */
          fileOrg: fs.readFileSync(fPath, 'utf-8'),
        });
      });
    }

    finder(pathName);
    return fileMap;
  }

  /** 根据单个文件读取需要翻译的文本 */
  getTranslateString(files: any) {
    let file = fs.readFileSync(files, 'utf-8');
    let fileArr = file.split(this.symbol);
    let strArr = '';
    for (let i of fileArr) {
      if (i.indexOf(':') != -1 && i.indexOf(',') != -1) {
        strArr += i.substring(i.indexOf(':') + 1, i.indexOf(',')) + '\n';
      }
    }
    return strArr;
  }


}

