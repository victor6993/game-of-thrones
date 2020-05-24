import { Component, OnInit, Input } from '@angular/core';
import { GotServiceService } from 'src/app/shared/got-service.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.scss'],
})
export class CharDetailComponent implements OnInit {
  charName: string;
  singleChar;

  constructor(
    private character: GotServiceService,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.nameChar) {
        this.charName = params.nameChar;
      }
    });
  }

  ngOnInit(): void {
    this.character.getCharacter(this.charName).subscribe((item: any) => {
      this.singleChar = item;
      console.log(item);
    });
  }

  // Se cambia el idioma a Español
  changeLanguageToSpanish(): void {
    this.translate.use('es');
    console.log('Idioma cambiado al Español');
  }

  // Se cambia el idioma a Inglés
  changeLanguageToEnglish(): void {
    this.translate.use('en');
    console.log('Idioma cambiado al Inglés');
  }
}
