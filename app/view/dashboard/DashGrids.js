
Ext.define('OrdersTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'orderstable',
    localData: 'orders',
    text: 'Orders List',


    getGridCols: function () {
        let grid = this,
            columns = [{
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
                xtype: 'statuscolumn',
                renderer: 'statusRenderer'
            }, {
                text: 'Amount Due',
                dataIndex: 'total_due',
                filterType: 'number',
                renderer: function (value) {
                    return Ext.util.Format.currency(value, 'DZD ');
                },
                width: 200
            }];
        if (grid.mainCard) {
            columns.splice(3, 0,
                {
                    text: 'Shipping Amount',
                    dataIndex: 'shipping_amount',
                    filterType: 'number',
                    width: 120
                },
                {
                    text: 'Inc Id',
                    dataIndex: 'increment_id',
                    filterType: 'number',
                    width: 120
                },
                {
                    text: 'Discount',
                    dataIndex: 'discount_amount',
                    filterType: 'number',
                    width: 80
                },

                {
                    text: 'Discount Des',
                    dataIndex: 'discount_description',
                    filterType: 'string',
                    width: 200
                },
            );
            return columns;
        } else
            return columns;
    },
    api: {
        read: {
            url: '/orders',
            defaultParams: {
                // Add default params to fetch the latest 10 records
                'searchCriteria[pageSize]': 10,
                'searchCriteria[currentPage]': 1,  // Optional: for paginated responses
                'searchCriteria[sortOrders][0][field]': 'created_at',  // Sort by 'created_at' for latest
                'searchCriteria[sortOrders][0][direction]': 'DESC'  // Sort in descending order
            }
        }
    }
});

Ext.define('CustomersTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'customerstable',
    text: 'Customers List',
    localData: 'customers',


    getGridCols: function () {
        return [{

            text: 'ID',
            dataIndex: 'id',
            filterType: 'number',
            width: 60
        },
        {
            text: 'Name',
            dataIndex: 'firstname',
            filterType: 'string',
            renderer: function (value, metaData, record) {
                return value + ' ' + metaData.get('lastname');
            },
            flex: 1
        },
        {
            text: 'Email',
            filterType: 'string',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: 'Created At',
            filterType: 'date',
            dataIndex: 'created_at',
            renderer: Ext.util.Format.dateRenderer('Y-m-d'), // Format the date
            width: 100
        }]
    },

    api: {
        read: {
            url: '/customers/search',
            defaultParams: {
                // Add default params to fetch the latest 10 records
                'searchCriteria[pageSize]': 10,
                'searchCriteria[currentPage]': 1,  // Optional: for paginated responses
                'searchCriteria[sortOrders][0][field]': 'created_at',  // Sort by 'created_at' for latest
                'searchCriteria[sortOrders][0][direction]': 'DESC'  // Sort in descending order
            }
        }
    }
});


Ext.define('ProductsTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'productstable',
    localData: 'products',
    text: 'Products List',


    getGridCols: function () {
        let grid = this,
            columns = [
                {
                    text: 'SKU',
                    dataIndex: 'sku',
                    filterType: 'number',
                    width: 120,
                    filter: {
                        type: 'string' // Filter type for SKU (string)
                    }
                },
                {
                    text: 'Name',
                    dataIndex: 'name',
                    filterType: 'string',
                    flex: 1,
                    filter: {
                        type: 'string' // Filter type for Name (string)
                    }
                },
                {
                    text: 'Product Type',
                    dataIndex: 'type_id',
                    filterType: 'string',
                    width: 80,
                    filter: {
                        type: 'list', // Filter type for product type (list of options)
                        options: [
                            { text: 'Simple', value: 'simple' },
                            { text: 'Configurable', value: 'configurable' },
                            { text: 'Grouped', value: 'grouped' }
                        ]
                    }
                },
                {
                    text: 'Price',
                    dataIndex: 'price',
                    filterType: 'number',
                    renderer: function (value) {
                        return Ext.util.Format.currency(value, 'DZD ');
                    },
                    width: 100,
                    filter: {
                        type: 'number' // Filter type for Price (number)
                    }
                },
                {
                    text: 'Status',
                    dataIndex: 'status',
                    filterType: 'boolean',
                    renderer: function (value) {
                        return value === 1 ? 'Enabled' : 'Disabled';
                    },
                    width: 80,
                    filter: {
                        type: 'boolean', // Filter type for Status (enabled/disabled)
                        options: [
                            { text: 'Enabled', value: 1 },
                            { text: 'Disabled', value: 0 }
                        ]
                    }
                },
                {
                    text: 'Created At',
                    dataIndex: 'created_at',
                    xtype: 'datecolumn',
                    filterType: 'date',
                    renderer: Ext.util.Format.dateRenderer('Y-m-d'), // Format the date
                    width: 120,
                    filter: {
                        type: 'date', // Filter type for Created At (date)
                        dateFormat: 'Y-m-d'
                    }
                },
                {
                    text: 'Updated At',
                    dataIndex: 'updated_at',
                    xtype: 'datecolumn',
                    filterType: 'date',
                    renderer: Ext.util.Format.dateRenderer('Y-m-d'), // Format the date
                    width: 120,
                    filter: {
                        type: 'date', // Filter type for Updated At (date)
                        dateFormat: 'Y-m-d'
                    }
                },


            ];
        if (grid.mainCard) {

            return columns;
        } else
            return columns;
    },
    api: {
        read: {
            url: '/products',
            defaultParams: {
                // Add default params to fetch the latest 10 records
                'searchCriteria[pageSize]': 10,
                'searchCriteria[currentPage]': 1,  // Optional: for paginated responses
                'searchCriteria[sortOrders][0][field]': 'created_at',  // Sort by 'created_at' for latest
                'searchCriteria[sortOrders][0][direction]': 'DESC'  // Sort in descending order
            }
        }
    }
});


Ext.define('InvoiceTable', {
    extend: 'Techno.view.components.Grid',
    xtype: 'invoicetable',
    localData: 'invoices',
    text: 'Invoice List',


    getGridCols: function () {
        let grid = this,
            columns =[
                {
                    text: "Base Currency Code",
                    dataIndex: "base_currency_code",
                    filterType: "string"
                },
                {
                    text: "Base Discount Amount",
                    dataIndex: "base_discount_amount",
                    filterType: "number"
                },
                {
                    text: "Base Grand Total",
                    dataIndex: "base_grand_total",
                    filterType: "number"
                },
               
                {
                    text: "Base Shipping Incl Tax",
                    dataIndex: "base_shipping_incl_tax",
                    filterType: "number"
                },
                {
                    text: "Base Shipping Tax Amount",
                    dataIndex: "base_shipping_tax_amount",
                    filterType: "number"
                },
                {
                    text: "Base Subtotal",
                    dataIndex: "base_subtotal",
                    filterType: "number"
                },
                {
                    text: "Base Subtotal Incl Tax",
                    dataIndex: "base_subtotal_incl_tax",
                    filterType: "number"
                },
                {
                    text: "Base Tax Amount",
                    dataIndex: "base_tax_amount",
                    filterType: "number"
                },
                {
                    text: "Base to Global Rate",
                    dataIndex: "base_to_global_rate",
                    filterType: "number"
                },
                {
                    text: "Base to Order Rate",
                    dataIndex: "base_to_order_rate",
                    filterType: "number"
                },
                {
                    text: "Billing Address ID",
                    dataIndex: "billing_address_id",
                    filterType: "number"
                },
                {
                    text: "Can Void Flag",
                    dataIndex: "can_void_flag",
                    filterType: "number"
                },
                {
                    text: "Created At",
                    dataIndex: "created_at",
                    filterType: "date"
                },
                {
                    text: "Discount Amount",
                    dataIndex: "discount_amount",
                    filterType: "number"
                },
                {
                    text: "Email Sent",
                    dataIndex: "email_sent",
                    filterType: "number"
                },
                {
                    text: "Entity ID",
                    dataIndex: "entity_id",
                    filterType: "number"
                },
                {
                    text: "Global Currency Code",
                    dataIndex: "global_currency_code",
                    filterType: "string"
                },
                {
                    text: "Grand Total",
                    dataIndex: "grand_total",
                    filterType: "number"
                },
                {
                    text: "Discount Tax Compensation Amount",
                    dataIndex: "discount_tax_compensation_amount",
                    filterType: "number"
                },
                {
                    text: "Increment ID",
                    dataIndex: "increment_id",
                    filterType: "string"
                },
                {
                    text: "Order Currency Code",
                    dataIndex: "order_currency_code",
                    filterType: "string"
                },
                {
                    text: "Order ID",
                    dataIndex: "order_id",
                    filterType: "number"
                },
                {
                    text: "Shipping Address ID",
                    dataIndex: "shipping_address_id",
                    filterType: "number"
                },
                {
                    text: "Shipping Amount",
                    dataIndex: "shipping_amount",
                    filterType: "number"
                },
                {
                    text: "Shipping Discount Tax Compensation Amount",
                    dataIndex: "shipping_discount_tax_compensation_amount",
                    filterType: "number"
                },
                {
                    text: "Shipping Incl Tax",
                    dataIndex: "shipping_incl_tax",
                    filterType: "number"
                },
                {
                    text: "Shipping Tax Amount",
                    dataIndex: "shipping_tax_amount",
                    filterType: "number"
                },
                {
                    text: "State",
                    dataIndex: "state",
                    filterType: "number"
                },
                {
                    text: "Store Currency Code",
                    dataIndex: "store_currency_code",
                    filterType: "string"
                },
                {
                    text: "Store ID",
                    dataIndex: "store_id",
                    filterType: "number"
                },
                {
                    text: "Store to Base Rate",
                    dataIndex: "store_to_base_rate",
                    filterType: "number"
                },
                {
                    text: "Store to Order Rate",
                    dataIndex: "store_to_order_rate",
                    filterType: "number"
                },
                {
                    text: "Subtotal",
                    dataIndex: "subtotal",
                    filterType: "number"
                },
                {
                    text: "Subtotal Incl Tax",
                    dataIndex: "subtotal_incl_tax",
                    filterType: "number"
                },
                {
                    text: "Tax Amount",
                    dataIndex: "tax_amount",
                    filterType: "number"
                },
                {
                    text: "Total Quantity",
                    dataIndex: "total_qty",
                    filterType: "number"
                },
                {
                    text: "Updated At",
                    dataIndex: "updated_at",
                    filterType: "date"
                }
            ] ;
        if (grid.mainCard) {

            return columns;
        } else
            return columns;
    },
    api: {
        read: {
            url: '/invoices',
            defaultParams: {
                // Add default params to fetch the latest 10 records
                'searchCriteria[pageSize]': 10,
                'searchCriteria[currentPage]': 1,  // Optional: for paginated responses
                'searchCriteria[sortOrders][0][field]': 'created_at',  // Sort by 'created_at' for latest
                'searchCriteria[sortOrders][0][direction]': 'DESC'  // Sort in descending order
            }
        }
    }
});
