Ext.define('Techno.view.main.ListViewModel', {
    extend: 'Techno.view.main.MainModel',

    alias: 'viewmodel.listvm',

    stores: {
        dataStore: {
            fields: ['name', 'email', 'phone'],
            data: []
        }
    }

});