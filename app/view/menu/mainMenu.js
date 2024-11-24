

Ext.define('Techno.view.main.MainMenu', {
    extend: 'Ext.Panel',
    xtype: 'tree-list',
    controller: 'tree-list',


    requires: [
        'Ext.list.Tree'
    ],

    viewModel: {
        type: 'tree-list'
    },

    bodyPadding: 10,

    scrollable: 'y',
 
    ui: 'nav',
    items: [{
        xtype: 'treelist',
        reference: 'treelist',
        bind: '{navItems}',
        listeners: {
            itemclick:'onMenuClick'
        }
    }]

});