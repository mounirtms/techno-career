Ext.define('Techno.view.list.GridPanel', {
    extend: 'Ext.panel.Panel',

    xtype: 'dashgridpanel',


    margin: 5,
    defaults: {
        height: 500,
        xtype: 'panel',
        header: false,
        layout: 'vbox',
        collapsible: true, // Make sure collapsible is set to true
        collapsed: false, // Set to true if you want it initially collapsed
        margin: 10,
        defaults: {
            rowNumbers: false,
            rowlines: false,

        }
    },
    responsiveConfig: {
        // For large screens, show all cards in one row (using flex: 1)
        'width < 900': {
            layout: { type: 'vbox', align: 'stretch' },
            defaults: { flex: 1 }
        },
        'width > 900': {
            layout: { type: 'hbox', align: 'stretch' },
            defaults: { flex: 1 }
        }
    },

});