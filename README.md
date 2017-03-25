# ng2-ueditor

## 简介
Angular2 UEditor组件(Angular2 UEditor component)

## 安装

```
npm install ng2-ueditor --save
```

## 使用
- 1.在项目中引入`UEditor`的JavaScript文件

```
<script type="text/javascript" src="assets/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="assets/ueditor/ueditor.all.js"></script>
```

- 2.安装依赖包：`ng2-ueditor`

```
npm install ng2-ueditor --save
```

- 3.在module中导入`Ng2UeditorModule`

```
import { Ng2UeditorModule } from 'ng2-ueditor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2UeditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

- 4.在模板页面使用

```
<ng2-ueditor [(ngModel)]="content"></ng2-ueditor>
```

## 属性(Attributes)
名称 | 类型 | 默认值 | 说明
---|---|---|---
setting | any | {} | [配置项](http://fex.baidu.com/ueditor/#start-config)

## 事件(Events)
名称 | 参数 | 说明
---|---|---
onReady | - | 编辑器初始化完成
onValueChange | value: string | 编辑器内容改变
onFocus | - | 编辑器获得焦点

## 方法(Methods)
名称 | 返回值 | 说明
---|---|---
getContent | value: string | 获取编辑器的内容
getPlainTxt | value: string | 得到编辑器的纯文本内容，但会保留段落格式
getContentTxt | value: string | 获取编辑器中的纯文本内容,没有段落格式
hasContents |value: boolean | 检查编辑区域中是否有内容
### 使用

```
import { Ng2Ueditor } from 'ng2-ueditor';

@ViewChild('ueditor') ueditor: Ng2Ueditor;

console.log('编辑器内容：'+this.ueditor.getContent());
console.log('纯文本内容，保留段落格式：'+this.ueditor.getPlainTxt());
console.log('纯文本内容，没有段落格式：'+this.ueditor.getContentTxt());
console.log('是否有内容：'+this.ueditor.hasContents());
```

---

# 示例(基于[angular-cli](https://github.com/angular/angular-cli)创建)
- 1.进入到demo目录

```
cd demo
```

- 2.安装依赖

```
npm install
```

- 3.启动服务

```
ng serve
```

- 4.访问 http://localhost:4200/