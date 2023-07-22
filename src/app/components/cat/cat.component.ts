import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Cat} from "../../common/interfaces";
import {CatService} from "../../services/cat.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit{
  miCat!: Cat;
  idCat = "";
  constructor(private catService: CatService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cargarCat();
  }

  private cargarCat() {
    this.idCat = this.activatedRoute.snapshot.params['id'];
    this.catService.getOneCat(this.idCat).subscribe(
      {
        next: data =>{
          this.miCat = data;
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
