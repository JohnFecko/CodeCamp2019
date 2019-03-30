import * as React from 'react';
import * as prerendering from 'aspnet-prerendering';
import { renderToString } from 'react-dom/server';
import Hello from './Hello';

export var Server = prerendering.createServerRenderer((params) => {
    return new Promise((resolve, reject) => {
		var app = <Hello />;

        //renderToString(app);

        params.domainTasks.then(() => {
            resolve({
                html: renderToString(app),
                globals: {
                }
            });
        }, reject); 
		
    });
});