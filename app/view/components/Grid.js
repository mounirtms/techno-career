Ext.define('Techno.view.components.Grid', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Ext.grid.filters.*',
        'Ext.grid.plugin.*'
    ],

    store: {
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: Techno.magentoApiUrl,
            headers: {
                // Add Authorization header with Bearer token
                'Authorization': 'Bearer ' + Techno.magentoAccessToken,
                'Content-Type': 'application/json',  // Set content type as JSON
            },
            extraParams: {},
            reader: {
                type: 'json',
                // Directly map to the items array from the response
                rootProperty: 'items',  // This assumes the response has a `data` object and `items` array inside it
                totalProperty: 'total_count'  // Assuming the total count is under `data.total_count`
            },
            listeners: {
                exception: function (proxy, response, operation) {
                    // Handle store-level exceptions here

                    Toast.showError("Error status : " + response.status);
                    setTimeout(function () {
                        Toast.showWarning("Clear Cache and Storage !");

                    }, 5000)
                }
            }
        },
        listeners: {
            load: function (store, records, successful, eOpts) {
                let cards = Ext.query('.card-panel .number-value');
                if (store.initialLoading && cards) {
                    if (store.proxy.url.includes('orders') && cards[2]) {
                        cards[2].innerText = store.totalCount
                    } else {
                        if (store.proxy.url.includes('customers') && cards[3]) {
                            cards[3].innerText = store.totalCount
                        }
                        else {
                            if (store.proxy.url.includes('products') && cards[1]) {
                                cards[1].innerText = store.totalCount
                            }
                        }
                    }
                }
            }
        }
    },

    height: window.innerHeight - 100,
    controller: 'listctrl',
    viewModel: {
        type: 'listvm'
    },

    layout: 'fit',

    rowlines: true,

    hasEditable: true,
    hasGridExpander: true,
    hasGridFilterBar: true,
    hasGridExporter: true,
    hasGridSummaryRow: true,


    hasGridRowOperation: false,
    hasGridCellEditing: false,
    hasGridFilters: false,

    canAdd: false,
    rowNumbers: true,

    shadow: true,

    plugins: [
        {
            type: 'pagingtoolbar',
            store: '{store}',
        },
        {
            type: 'gridfilterbar'
        },
        {
            type: 'grideditable'
        }

    ],



    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            height: 28,
            items: []
        }
    ],

    initialize: function () {
        this.callParent(arguments);

        let grid = this;
        grid.setColumns(Ext.Array.merge(grid.ctxMenuCol(grid), grid.getGridCols()))
        grid.getGridPlugins(grid);
        grid.getController().loadData(false);
        grid.down('toolbar').add(grid.getToolbarItems(grid));

        grid.getController().setupStoreListeners(grid.getViewModel().get('dataStore'));
        grid.triggerInitialized();

    },

    ctxMenuCol: function (grid) {
        if (grid.hasCtxMenu) {
            grid.applyContextMenu();
            if (Ext.os.is.Desktop) {
                grid.el.on({
                    scope: grid.getController(),
                    contextmenu: grid.getController().onContextMenu
                });
            }
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
        }
        else
            return [];
    },

    getToolbarItems: function (grid) {
        let items = [
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
                iconCls: 'x-fa fa-cog',
                handler: 'doListSettings'
            },
            {
                iconCls: 'x-fa fa-file',
                handler: 'doExport'
            },
            {
                iconCls: 'x-fa fa-expand',
                handler: 'showAllList'
            },

            {
                iconCls: 'x-fa fa-caret-square-down',
               //handler: 'collapseGrid'
            }

        ];

        grid.mainCard && this.removeByAtt(items, 'handler', 'showAllList');
        grid.mainCard && this.removeByAtt(items, 'handler', 'collapseGrid');
        !grid.canAdd && this.removeByAtt(items, 'handler', 'addNew');

        return items;

    },
    /**
     * Removes an item from an array based on a specified attribute and value.
     * 
     * @param {Array} arr - The array to modify.
     * @param {string} att - The attribute name to match.
     * @param {*} val - The value to match for the attribute.
     */
    removeByAtt: function (arr, att, val) {
        // Validate input parameters
        if (!Array.isArray(arr)) {
            console.error('The first parameter should be an array.');
            return;
        }
        if (typeof att !== 'string') {
            console.error('The attribute name should be a string.');
            return;
        }

        // Find the index of the item in the array where the attribute matches the value
        const index = arr.findIndex(item => item[att] === val);

        // If item found, remove it from the array
        if (index !== -1) {
            arr.splice(index, 1);
        } else {
            console.warn(`Item with ${att}="${val}" not found.`);
        }
    },


    getGridPlugins: function (grid) {

        if (grid.hasGridExporter) {
            grid.addPlugin({ type: 'rowexpander' });
            grid.setItemConfig({
                body: {
                    tpl: grid.getRowBodyExpanderTemplate()
                }
            })
        }

        grid.hasGridFilters && grid.addPlugin({ type: 'gridfilters' })
        grid.hasGridCellEditing && grid.addPlugin({ type: 'gridcellediting' })


        // !grid.hasGridSummaryRow && grid.addPlugin({type:'gridsummaryrow'})


        grid.refresh();

    },

    getRowBodyExpanderTemplate: function () {
        let me = this,
            tpl = '<tpl for=".">';
        tpl += '<pre>{[JSON.stringify(values, null, 4)]}</pre>'; // Using JSON.stringify with indentation

        tpl += '</tpl>';

        return tpl;

        /*   return [
   
               '<div><b>Details:</b> {details}</div>',
               '<div><b>Category:</b> {category}</div>',
               '<div><b>Status:</b> {status}</div>',
   
               '<div><b>Product Count:</b> {product_count}</div>'
   
           ];*/
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
