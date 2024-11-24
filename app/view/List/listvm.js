Ext.define('Techno.view.main.ListViewModel', {
    extend: 'Techno.view.main.MainModel',
    alias: 'viewmodel.listvm',

    stores: {
        dataStore: { 
            type: 'store',
            //model: 'Techno.model.Item',  // Define a model if needed

            
            proxy: {
                type: 'memory',  // This will use memory-based proxy
            },
            data: []  // Initialize with an empty array
        }
    }
});
