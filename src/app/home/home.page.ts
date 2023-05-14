import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  tweets: any[] = [
    {
      username: 'DUOC SEDE MAIPÚ',
      handle: 'duocucmaipu',
      like: '1232',
      retweets: '34k',
      response: '100',
      text: '¡¡Emergencia!! Debido a un gran accidente que compromete la calle cinco de abril con primera transversal: Duoc Sede Maipú no abrirá sus puertas el día de hoy.',
      date: '1581322823',
      liked: true,
      retweet: false,
      attachment: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Duoc_UC_-_Sede_Maip%C3%BA.jpg',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Duoc_UC_-_Sede_Maip%C3%BA.jpg'
  },
  {
    username: 'DUOC SEDE SAN CARLOS DE APOQUINDO',
    handle: 'duocucsancarlos',
    like: '25k',
    retweets: '100k',
    response: '124',
    text: '¡¡Suspención de clases debido a corte de agua!! Tras una ruptura de cañería, la sede se encuentra temporalmente cerrada. Por ahora, sólo se darán clases online hasta que el problema se solucione. ¡¡Recordar que las clases online también son de carácter obligatorio!!',
    date: '1581322823',
    liked: true,
    retweet: true,
    attachment: 'https://live.staticflickr.com/8454/8052574696_2106b56753_b.jpg',
    img: 'https://live.staticflickr.com/8454/8052574696_2106b56753_b.jpg'
},

    // Agrega más tweets aquí...
  ];
}

