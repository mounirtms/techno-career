Ext.define('Techno.store.MyDataStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mydatastore',

    config: {
        model: 'Techno.model.Base',
        proxy: {
            type: 'firebaserealtime',
            path: 'personnel'
        }
    }
});
