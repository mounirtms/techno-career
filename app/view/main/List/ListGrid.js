/**
 * This view is an example list of people.
 */
Ext.define('Techno.view.main.ListGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    controller: 'listctrl',

    requires:['Techno.view.fields.ProvinceCombo'],

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
            text: 'First Name',
            dataIndex: 'firstname',
            width: 200,
            editable: true,
            cell: {
                userCls: 'bold'
            }
        },
        {
            text: 'Last Name',
            dataIndex: 'lastname',
            width: 200,
            editable: true,
            cell: {
                userCls: 'bold'
            }
        },
        {
            text: 'Position',
            dataIndex: 'position',
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
        },
        {
            text: 'Province',
            dataIndex: 'province',
            editable: true,
            editor: {
                xtype: 'provincecombo'
            },
            width: 150
        },
        {
            text: 'Daira',
            dataIndex: 'daira',
            editable: true,
            editor: {
                xtype: 'subprovincecombo'
            },
            width: 150
        },
        {
            text: 'Commune',
            dataIndex: 'commune',
            editable: true,
            editor: {
                xtype: 'communecombo'
            },
            width: 150
        },
    ],
    listeners: {
        initialize: 'loadGrid'
    }
});
