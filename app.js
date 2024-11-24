/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "Techno.Application",

  name: "Techno",

  requires: [
    // This will automatically load all classes in the Techno namespace
    // so that application classes do not need to require each other.
    "Techno.*",
  ],

  // The name of the initial view to create.
  mainView: 'Techno.view.main.MainPort',
  controller:'main'
});