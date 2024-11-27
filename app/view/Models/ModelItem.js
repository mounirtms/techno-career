Ext.define('Techno.model.Item', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'group_id', type: 'int' },
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'created_at', type: 'date' },
        { name: 'updated_at', type: 'date' },
        { name: 'default_billing', type: 'int' },
        { name: 'default_shipping', type: 'int' },
        { name: 'gender', type: 'int' },
        { name: 'entity_id', type: 'int' },
        { name: 'created_at', type: 'date' },
        { name: 'status', type: 'string' },
        { name: 'total_due', type: 'float' },
        { name: 'customer_email', type: 'string' },
        { name: 'customer_firstname', type: 'string' },
        { name: 'customer_lastname', type: 'string' },
        { name: 'shipping_amount', type: 'float' },
        { name: 'grand_total', type: 'float' }
    ]
});
