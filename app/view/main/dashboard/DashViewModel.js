Ext.define('DashViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashviewmodel',

    stores: {
        ordersStore: {
            fields: ['orderId', 'date', 'status', 'amount'],
            data: [{
                orderId: 'ORD001',
                date: '2024-11-01',
                status: 'Completed',
                amount: '$100'
            }, {
                orderId: 'ORD002',
                date: '2024-11-02',
                status: 'Pending',
                amount: '$150'
            }, {
                orderId: 'ORD003',
                date: '2024-11-03',
                status: 'Completed',
                amount: '$200'
            }]
        },
        customersStore: {
            fields: ['customerId', 'name', 'email'],
            data: [
                { customerId: 'CUST001', name: 'John Doe', email: 'john@example.com' },
                { customerId: 'CUST002', name: 'Jane Smith', email: 'jane@example.com' },
                { customerId: 'CUST003', name: 'Alice Brown', email: 'alice@example.com' }
            ]
        }
    }
});