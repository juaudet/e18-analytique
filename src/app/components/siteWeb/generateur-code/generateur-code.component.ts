import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../../../services/shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generateur-code',
  templateUrl: './generateur-code.component.html',
  styleUrls: ['./generateur-code.component.css']
})
export class GenerateurCodeComponent implements OnInit {

  tokenSite: string;

  constructor(private administrateurService: AdministrateurService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getToken();
  }

  
  getToken(): void{
    this.administrateurService.getToken().subscribe(
      (data: any) => {
        this.tokenSite = data['token_site'];
      },
        (error: any) => {
          this.toastr.error("Nous n'arrivons pas à obtenir votre token !");
        }
    );
  }

  /**
   * https://stackoverflow.com/questions/49236100/copy-text-from-span-to-clipboard
   */
  copyInputMessage() {
    var copyText = document.getElementById("tokenInput");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    console.log("salut");
}

}
