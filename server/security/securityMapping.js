/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/anagraficas/*$' : [],
	'DELETE - /api/anagraficas/([^/])+$' : [],
	'GET - /api/anagraficas/([^/])+$' : [],
	'GET - /api/anagraficas/*$' : [],
	'POST - /api/anagraficas/([^/])+$' : [],
	'POST - /api/companies/*$' : null,
	'DELETE - /api/companies/([^/])+$' : null,
	'GET - /api/companies/([^/])+$' : null,
	'GET - /api/companies/*$' : null,
	'POST - /api/companies/([^/])+$' : null,
	'POST - /api/contacts/*$' : null,
	'DELETE - /api/contacts/([^/])+$' : null,
	'GET - /api/contacts/findBycompany/([^/])+$' : null,
	'GET - /api/contacts/([^/])+$' : null,
	'GET - /api/contacts/*$' : null,
	'POST - /api/contacts/([^/])+$' : null,
	'POST - /api/Users/([^/])+/changePassword$' : ["ADMIN"],
	'POST - /api/Users/*$' : [],
	'DELETE - /api/Users/([^/])+$' : [],
	'GET - /api/Users/([^/])+$' : [],
	'GET - /api/Users/*$' : [],
	'POST - /api/Users/([^/])+$' : [],
	

}
