import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generateur-code',
  templateUrl: './generateur-code.component.html',
  styleUrls: ['./generateur-code.component.css']
})
export class GenerateurCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  
  /* To copy Text from Textbox
     https://stackoverflow.com/questions/49102724/angular-5-copy-to-clipboard
  */
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
