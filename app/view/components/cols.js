Ext.define('Techno.view.StatusColumn', {
    extend: 'Ext.grid.column.Column',
    xtype: 'statuscolumn', // The alias to use in the grid definition

    // Default configuration for the column
    text: 'Status',
    dataIndex: 'status',
    width: 250,
    filterType: 'string',

});
