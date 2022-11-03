import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  data : Object;
  loading : boolean;
  obs : Observable<Object>;
  constructor(public http : HttpClient) {
    
    makeRequest(): void {
      //Notifichiamo che stiamo attendendo dei dati
      this.loading = true; 
      //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta
      this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
      //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la 
      //risposta
      this.o.subscribe(this.getData);
    }
    
    getData = (d : Object) => {
     this.data = d; 
      this.loading = false; 
    }
    
  }

  ngOnInit(): void {
  }

}
