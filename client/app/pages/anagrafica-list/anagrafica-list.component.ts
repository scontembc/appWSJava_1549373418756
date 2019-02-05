// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { AnagraficaService } from '../../services/anagrafica.service';

// Import Models
import { Anagrafica } from '../../domain/my-contacts_db/anagrafica';

// START - USED SERVICES
/*
 *	AnagraficaService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	AnagraficaService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * AnagraficaService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "anagrafica-list",
    templateUrl: './anagrafica-list.component.html',
    styleUrls: ['./anagrafica-list.component.css']
})
export class AnagraficaListComponent implements OnInit {
    
    // Attributes
    list: Anagrafica[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private anagraficaService: AnagraficaService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.anagraficaService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.anagraficaService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}