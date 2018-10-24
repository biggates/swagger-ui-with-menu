/**
 * entry file for static js environment (running in browser)
 */
import * as SwaggerUI from 'swagger-ui/dist/swagger-ui.js';
import StandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset';

import 'swagger-ui/dist/swagger-ui.css';
import './assets/styles/style.css';
import './style/style.css';

import * as specs from './specs/';

import './assets/favicon.ico';

// console.log('specs are : ', specs);

// import * as externals from './external/';

const primaryName = process.env.NODE_ENV === 'production' ? 'jiankang-api' : 'admin-data-collect-api';

SwaggerUI({
    urls: specs,
    "urls.primaryName": primaryName,
    dom_id: '#swagger-ui',
    validatorUrl: null,
    deepLinking: true,
    presets: [
        SwaggerUI.presets.apis,
        StandalonePreset
    ],
    layout: "StandaloneLayout"
});
