import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solfege';
  result = '正解です！';
  DOH_click(){
    this.result = 'DOHが押されました';
  }
  RAY_click(){
    this.result = 'RAYが押されました';
  }
  ME_click(){
    this.result = 'MEが押されました';
  }
  FAH_click(){
    this.result = 'FAHが押されました';
  }
  SOH_click(){
    this.result = 'SOHが押されました';
  }
  LAH_click(){
    this.result = 'LAHが押されました';
  }
  TE_click(){
    this.result = 'TEが押されました';
  }
  
}
