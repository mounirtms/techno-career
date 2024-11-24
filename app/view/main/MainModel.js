/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Techno.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        running:false,  // remove this 
        name: 'Techno',
        isLoggedIn:false,
        cardTitle:'Dashboard',
        config: {},
        translations: {}
    }
});
