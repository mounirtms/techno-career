/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Techno.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Techno',
        isLoggedIn:false,
        config: {},
        translations: {}
    },

});
