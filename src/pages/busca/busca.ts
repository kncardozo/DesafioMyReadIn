import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookService } from '../../services/rest/book-service';
 
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage { 
  books: any;

  constructor(public navCtrl: NavController,  private bookService: BookService) {
    this.books = [
      {titulo:'Dear John', autor:'Nicholas Sparks', imagem:'https://images.gr-assets.com/books/1397749854m/5526.jpg'}, 
      {titulo:'Dear Daughter', autor:'Elizabeth Little', imagem:'https://images.gr-assets.com/books/1395618683m/18693753.jpg'}, 
      {titulo:'Dear Martin', autor:'Nic Stone', imagem:'https://images.gr-assets.com/books/1495747080m/24974996.jpg'}, 
      {titulo:'Dear Aaron', autor:'Mariana Zapata', imagem:'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'}, 
    ];
  }
  getInput(event){
    if(event.target.value.length > 2) {
      this.bookService.searchBooks(event.target.value).subscribe(
        data => {
            //this.books = data.results; 
            console.log(data);
        },
        err => {
            console.log(err);
        },
        () => console.log('Book Search Complete')
    );
      console.log(event.target.value)
    }
  }
}