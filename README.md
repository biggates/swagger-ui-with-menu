# swagger-ui-with-menu
OpenAPI document with multiple document entries, powered by swagger-ui

## Setup ##

1. Make sure nodejs and yarn are installed.
2. Clone this repo as a starting point.
  ```
  # git clone https://github.com/biggates/swagger-ui-with-menu.git
  ```
3. Install all dependencies.
  ```
  # yarn
  ```

## Write OpenAPI Specs ##

1. Start the project, an empty web page will automatically opened in your browser.
  ```
  # yarn start
  ```
2. In `specs` folder, create any `json` or `yaml` files and fill in contents using any text editor.
3. Your browser will refresh as spec files are saved to disk.
4. All files in `external` folder are copied to `dist` and available to be referenced in OpenAPI specs.

## Deploy ##

Run `yarn build` and deploy everything under `dist` folder.

## Customization ##

1. Html template (title, dom, etc.)

  You can directly edit `src/assets/index.html` to change the html content.

2. Styles

  As swagger-ui does not provide any scss files, all the styles can only be overridden in the following two css files:
  * All swagger related styles are in `src/style/style.css`.
  * All other styles are in `src/assets/styles/style.css`.
