// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
import "./controllers"

import { Turbo } from "@hotwired/turbo-rails";
// app/javascript/application.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import 'bootstrap'; // Importa Bootstrap JS
import { Application } from "@hotwired/stimulus";
// import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

// Initialize Turbo
Turbo.start();

// Initialize Stimulus
const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));