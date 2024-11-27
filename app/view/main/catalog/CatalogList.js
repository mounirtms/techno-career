
Ext.define('Techno.view.main.CataLogList', {
    extend: 'Ext.grid.Tree',
    xtype: 'cataloglist',

    viewModel:{
        type:'cataloglist'
    },
 
    height:window.innerHeight-100,
  

    shadow: true,

    // binds the store from the TreeGridModel to this tree
    bind: '{navItems}', 

    columns: [
        {
            xtype: 'treecolumn',  // This column type handles hierarchical data
            text: 'Category Name',
            dataIndex: 'text',
            flex: 1
        },
        {
            text: 'Product Count',
            dataIndex: 'product_count',
            flex: 1
        },
        {
            text: 'Active',
            dataIndex: 'is_active',
            renderer: function(value) {
                return value ? 'Yes' : 'No';
            }
        },
        {
            text: 'Level',
            dataIndex: 'level',
            flex: 1
        }
    ]

});