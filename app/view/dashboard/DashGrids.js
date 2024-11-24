
Ext.define('OrdersTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'orderstable',
    viewModel: { type: 'listvm' },

    localData: 'orders',


    config: {
        canAdd: false
    },

    getGridCols: function () {
        return [{
            text: 'Order ID',
            dataIndex: 'entity_id',
           filterType: 'number',
            width: 60
        }, {
            text: 'Date',
            dataIndex: 'created_at',
           filterType: 'date',
            renderer: Ext.util.Format.dateRenderer('Y-m-d'), // Format the date
            width: 100
        }, {
            text: 'Status',
            filterType: 'string',
            dataIndex: 'status',
            renderer: function (value, record, dataIndex, cell, column) {
                cell.cls = value;
                return value;
            },
            flex: 1
        }, {
            text: 'Amount Due',
            dataIndex: 'total_due',
            filterType: 'number',
            renderer: function (value) {
                return Ext.util.Format.currency(value, 'DZD');
            },
            width: 100
        }]
    }

});

Ext.define('CustomersTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'customerstable',
    viewModel: { type: 'listvm' },

    localData: 'customers',
    config: {
        canAdd: false
    },

    getGridCols: function () {
        return [{

            text: 'ID',
            dataIndex: 'id',
            width: 40
        },
        {
            text: 'Name',
            dataIndex: 'firstname',
            renderer: function (value, metaData, record) {
                return value + ' ' + metaData.get('lastname');
            },
            flex: 1
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: 'Created At',
            dataIndex: 'created_at',
            renderer: Ext.util.Format.dateRenderer('Y-m-d'), // Format the date
            width: 100
        }  ]
    }
});
