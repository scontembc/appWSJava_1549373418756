// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { AnagraficaService } from '../../services/anagrafica.service';

// Import Models
import { Anagrafica } from '../../domain/my-contacts_db/anagrafica';

// START - USED SERVICES
/*
 *	AnagraficaService.create
 *		PARAMS: 
 *		
 *
 *	AnagraficaService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	AnagraficaService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * AnagraficaService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for AnagraficaEdit
 */
@Component({
    selector: 'anagrafica-edit',
    templateUrl : './anagrafica-edit.component.html',
    styleUrls: ['./anagrafica-edit.component.css']
})
export class AnagraficaEditComponent implements OnInit {

    item: Anagrafica;
    model: Anagrafica;
    
    constructor(
        private anagraficaService: AnagraficaService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Anagrafica();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.anagraficaService.get(id).subscribe(item => this.item = item);
                    
                    
                }
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Anagrafica): void{
        if (formValid) {
            if(item._id){
                this.anagraficaService.update(item).subscribe(data => this.goBack());
            } else {
                this.anagraficaService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}