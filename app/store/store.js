Ext.define('Techno.store.MyDataStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mydatastore',

    requires: ['Ext.data.proxy.RealTime'],

    config: {
        model: 'Techno.model.Base', 
        proxy: {
            type: 'realtime',
            url: 'https://techno-career-default-rtdb.europe-west1.firebasedatabase.app', 
            database: firebase.database() 
        }
    }
});
