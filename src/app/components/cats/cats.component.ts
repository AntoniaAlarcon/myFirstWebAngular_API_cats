import {Component, OnInit} from '@angular/core';
import {CatService} from "../../services/cat.service";
import {Cat} from "../../common/interfaces";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit{
  misCats: Cat[] = []; // inicialmente está vacío

  constructor(private catService: CatService) {
  }
  ngOnInit(): void {
    this.cargarCats();
  }

  private cargarCats() {
    this.catService.getAllCats().subscribe(
      {
        next: data =>{
          this.misCats = data;
          console.log(this.misCats);
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
  }


}
