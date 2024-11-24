Ext.define('Techno.view.components.Grid', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Ext.grid.filters.*'
    ],

    config: {
        canAdd: true
    },
    //height: 400,
    store: Ext.create('Ext.data.Store'),
    plugins: {
        grideditable: {
            enableDeleteButton: true, // Optionally enable delete button
        },
        //gridfilterbar: true,
        gridfilters: true,
       // gridexporter: true,
        rowexpander: true,
        gridsummaryrow: true,
        rowoperations: {
            operation: {
                text: 'Archive',
                handler: 'onRowOperation',
                ui: 'alt'
            }
        }
    },

    minHeight: 800,
    controller: 'listctrl',
    viewModel: {
        type: 'listvm'
    },
    layout: 'fit',
    frame: true,
    rowlines: true,
    bind: {
        store: '{dataStore}'
    },
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
                },
                '->',
                {
                    text: 'Export',
                    handler: function () {
                        debugger
                        // Exporter Export
                        Ext.util.CSV.delimiter = ","
                        grid.saveDocumentAs({
                            type: 'xlsx',
                            title: 'My export',
                            fileName: 'myExport.xlsx',
                            charset: ':'
                        });
                    }
                },
                {

                    iconCls: 'x-fa fa-expand',
                    handler: 'showAllList'
                }
            ]
        }
    ],

    ctxMenuCol: function () {
        return [
            {
                width: 40,
                cell: {
                    tools: {
                        menu: 'onMenu'
                    }
                }
            }
        ];
    },
    rowNumbers: true,
    listeners: {
        initialize: function (grid) {

            grid.setColumns(Ext.Array.merge(grid.ctxMenuCol(), grid.getGridCols()))
            grid.getController().loadData();


            grid.applyContextMenu();
            if (Ext.os.is.Desktop) {
                grid.el.on({
                    scope: grid.getController(),
                    contextmenu: grid.getController().onContextMenu
                });
            }
            // grid.getController().setupStoreListeners(grid.getStore());
        }
    },

    getGridCols: function () {
        let me = this;
        return [];

    },

    applyContextMenu: function () {
        let me = this;
        me.toolContextMenu = { // used by Controller
            xtype: 'menu',
            anchor: true,
            padding: 10,
            minWidth: 260,
            viewModel: {},
            items: me.getCtxMenuItems()
        };
    },

    getCtxMenuItems: function () {
        return [{
            text: 'Edit',
            separator: true,
            margin: '10 0 0',
            iconCls: 'x-fa fa-cog'
        }, 
        {
            text: 'Share',
            margin: '10 0 0',
            iconCls: 'x-far fa-share-square'
        }, 
        {
            text: 'Rate Speaker',
            margin: '10 0 0',
            iconCls: 'x-fa fa-star'
        }, {
            text: 'Favorite Speaker',
            margin: '10 0 0',
            iconCls: 'x-fa fa-heart'
        }]
    },


});
