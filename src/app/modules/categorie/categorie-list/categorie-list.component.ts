import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../_services/categorie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { AddCategorieComponent } from '../components/add-categorie/add-categorie.component';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {
  isLoading$;
  isLoading = false;

  constructor(
    public _categorieService: CategorieService,
    public modelService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._categorieService.isLoading$;

  }

  addCategoria(){
    const modalRef = this.modelService.open(AddCategorieComponent, {centered : true, size: 'sm'});
    
  }

}
