Ext.application({
    name: 'Fiddle',

    launch: function () {

        Ext.define('TreeGrid', {
            extend: 'Ext.grid.Tree',
            xtype: 'treegrid',
            height: 400,

            store: {
                type: 'tree',
                autoLoad: true,
                rootVisible: false,
                proxy: {
                    type: 'ajax',
                    url: 'data.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'children_data'
                    }
                }
            },
            columns: [{
                xtype: 'treecolumn', // This column type handles hierarchical data
                text: 'Category Name',
                dataIndex: 'name',
                flex: 2
            }, {
                text: 'Product Count',
                dataIndex: 'product_count',
                flex: 1
            }, {
                text: 'Active',
                dataIndex: 'is_active',
                renderer: function (value) {
                    return value ? 'Yes' : 'No';
                }
            }, {
                text: 'Level',
                dataIndex: 'level',
                flex: 1
            }]
        });

        Ext.create({
            xtype: 'treegrid',
            fullscreen: true
        })

    }
});
