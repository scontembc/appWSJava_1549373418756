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
import { QualificaBaseService } from "./base/qualifica.base.service";
import { Qualifica } from '../domain/my-contacts_db/qualifica';

/**
 * YOU CAN OVERRIDE HERE QualificaBaseService
 */

@Injectable()
export class QualificaService extends QualificaBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}