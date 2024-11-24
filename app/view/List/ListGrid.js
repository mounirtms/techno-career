/**
 * This view is an example list of people.
 */
Ext.define('Techno.view.main.ListGrid', {
    extend: 'Techno.view.components.Grid',
    xtype: 'mainlist',

    requires: ['Techno.view.fields.ProvinceCombo'],

    config: {
        canAdd: true
    },
    path: 'users',


    getGridCols: function () {

        return [
            {
                text: 'First Name',
                dataIndex: 'firstname',
                width: 200,
                editable: true,
                filterType: 'string',
                cell: {
                    userCls: 'bold'
                }
            },
            {
                text: 'Last Name',
                dataIndex: 'lastname',
                width: 200,
                editable: true,
                filterType: 'string',
                cell: {
                    userCls: 'bold'
                }
            },
            {
                text: 'Position',
                dataIndex: 'position',
                width: 100,
                editable: true,
                filterType: 'string',
                cell: {
                    userCls: 'bold'
                }
            },
            {
                text: 'Email',
                dataIndex: 'email',
                filterType: 'string',
                editable: true,
                width: 230
            },
            {
                text: 'Phone',
                dataIndex: 'phone',
                editable: true,
                filterType: 'string',
                width: 150
            },
            {
                text: 'Province',
                dataIndex: 'province',
                editable: true,
                filterType: 'string',
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
                filterType: 'string',
                editor: {
                    xtype: 'communecombo'
                },
                width: 150
            },
        ];
    }
});
