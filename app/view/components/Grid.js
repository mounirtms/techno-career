Ext.define('Techno.view.components.Grid', {
    extend: 'Ext.grid.Grid',
    plugins: {
        grideditable: {
            enableDeleteButton: true, // Optionally enable delete button
        }
    },
    controller: 'listctrl',

    layout: 'fit',



    frame: true,
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    iconCls: 'x-fa fa-sync',
                    handler: 'loadData'
                },
                {
                    text: 'Add New',
                    iconCls: 'x-fa fa-plus',
                    handler: 'addNew'
                },
                {
                    xtype: 'textfield',
                    width: 150,
                    placeholder: 'Search'
                }
            ]
        }
    ],


    listeners: {
        initialize: 'loadGrid'
    }

});

