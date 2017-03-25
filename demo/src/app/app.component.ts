import { Component, ViewChild } from '@angular/core';

import { Ng2Ueditor } from 'ng2-ueditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ueditor') ueditor: Ng2Ueditor;

  content1 = 'Hello UEditor';
  content2 = 'Hello UEditor';
  content3 = 'Hello UEditor';
  content4 = 'Hello UEditor';

  setting = {
    //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
    toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'test']],
    //focus时自动清空初始化时的内容
    autoClearinitialContent: true,
    //关闭字数统计
    wordCount: false,
    //关闭elementPath
    elementPathEnabled: false,
    //默认的编辑区域高度
    initialFrameHeight: 300,
    //更多其他参数，请参考ueditor.config.js中的配置项
    serverUrl: '/server/ueditor/controller.php'
  }

  onValueChange(value: string){
    console.log('---编辑器内容发生改变---');
    console.log('编辑器内容：'+value);
  }

  printInfo(){
    console.log('---打印信息---');
    console.log('编辑器内容：'+this.ueditor.getContent());
    console.log('纯文本内容，保留段落格式：'+this.ueditor.getPlainTxt());
    console.log('纯文本内容，没有段落格式：'+this.ueditor.getContentTxt());
    console.log('是否有内容：'+this.ueditor.hasContents());
  }
}
