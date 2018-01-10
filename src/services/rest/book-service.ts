import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as xml2js from "xml2js";

@Injectable()
export class BookService {
    constructor(private http:Http) {
 
    }
    searchBooks(bookTitle) {
        console.log("Chegou no service "+bookTitle)
        var url = 'https://www.goodreads.com/search.xml?key=y8nNBm0pjYTJhFNMqHEqQ&search[field]=title&q=' + encodeURI(bookTitle) ;
        var response = this.http.get(url).map(res => console.log(res));
        console.log(response);
        // xml2js.parseString(response, function (err, result) {
        //     console.log(result);
        //     return result;
        //     });
        return response;
    }   
}