/**
 * This view is an example list of people.
 */
Ext.define('Techno.view.main.ListGrid', {
    extend: 'Techno.view.components.Grid',
    xtype: 'mainlist',
    controller: 'listctrl',

    requires: ['Techno.view.fields.ProvinceCombo'],

    header: false,
    canAdd: true,
    path: 'users',
    viewModel: {
        type: 'listvm'
    },
    storeName:'dataStore',

    bind: {
        store: '{dataStore}'
    },

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
    ]
});
