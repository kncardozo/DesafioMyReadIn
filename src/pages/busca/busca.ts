import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookService } from '../../services/rest/book-service';
 
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage { 
  books: Array<any>;

  constructor(public navCtrl: NavController,  private bookService: BookService) {

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