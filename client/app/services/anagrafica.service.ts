// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { AnagraficaBaseService } from "./base/anagrafica.base.service";
import { Anagrafica } from '../domain/my-contacts_db/anagrafica';

/**
 * YOU CAN OVERRIDE HERE AnagraficaBaseService
 */

@Injectable()
export class AnagraficaService extends AnagraficaBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}