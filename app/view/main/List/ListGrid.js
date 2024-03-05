/**
 * This view is an example list of people.
 */
Ext.define('Techno.view.main.ListGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    controller: 'listctrl',

    header: false,
    plugins: {
        grideditable: {
            enableDeleteButton: true, // Optionally enable delete button
        }
    },
    path: 'users',
    viewModel: {
        type: 'listvm'
    },

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
                    handler:'loadData'
                },
                {
                    text: 'Add New',
                    iconCls: 'x-fa fa-plus',
                    handler:'addNew'
                },
                {
                    xtype: 'textfield',
                    width: 150,
                    placeholder: 'Search'
                }
            ]
        }
    ],
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            width: 100,
            editable: true,
            cell: {
                userCls: 'bold'
            }
        },
        {
            text: 'Email',
            dataIndex: 'email',
            editable: true,
            width: 230
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        initialize: 'loadGrid'
    }
});
