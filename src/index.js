/**
 * entry file for static js environment (running in browser)
 */

import 'swagger-ui/dist/swagger-ui.css';
import './assets/styles/style.css';
import './style/style.css';
import './assets/favicon.ico';

import * as specs from './specs';

import StandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset';
import SwaggerUI from 'swagger-ui';

SwaggerUI({
  urls: specs,
  dom_id: '#swagger-ui',
  validatorUrl: null,
  deepLinking: true,
  presets: [SwaggerUI.presets.apis, StandalonePreset],
  layout: 'StandaloneLayout',
});
