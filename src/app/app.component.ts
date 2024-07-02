import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-input';
  message:   string = '';
  fourDigit: string = '6874';

  submitCode(code: string) {
    this.message = code === this.fourDigit ? 'Code successfully submitted' : 'Wrong code';
  }


}
