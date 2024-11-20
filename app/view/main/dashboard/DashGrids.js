
Ext.define('OrdersTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'orderstable',
    title: 'Recent Orders',

    controller: 'dashcontroller', // Attach the controller
    viewModel: {
        type: 'dashviewmodel'
    },
    storeName: 'ordersStore',
    bind: {
        store: '{ordersStore}'
    },

    columns: [{
        text: 'Order ID',
        dataIndex: 'orderId',
        flex: 1
    }, {
        text: 'Date',
        dataIndex: 'date',
        flex: 1
    }, {
        text: 'Status',
        dataIndex: 'status',
        flex: 1
    }, {
        text: 'Amount',
        dataIndex: 'amount',
        flex: 1
    }],
    cls: 'grid-table'

});

Ext.define('CustomersTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'customerstable',
    title: 'Recent Customers',
    controller: 'dashcontroller', // Attach the controller
    viewModel: {
        type: 'dashviewmodel'
    },
    storeName: 'customersStore',

    bind: {
        store: '{customersStore}'
    },

    columns: [
        { text: 'Customer ID', dataIndex: 'customerId', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 2 },
        { text: 'Email', dataIndex: 'email', flex: 2 }
    ],
    cls: 'grid-table'
});
