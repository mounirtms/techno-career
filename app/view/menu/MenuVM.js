Ext.define('Techno.view.main.MenuVM', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.tree-list',

    formulas: {
        selectionText: function (get) {
            var selection = get('treelist.selection'),
                path;

            if (selection) {
            
           
                return  
            }
            else {
                return 'No node selected';
            }
            return 'No node selected'; // can be applied for history .. 
        }
        
    },

    stores: {
        navItems: {
            type: 'tree',
            rootVisible: true,
            root: {
                expanded: false,
                children: [
                    {
                        text: 'Dashboard',
                        iconCls: 'x-fa fa-home',
                        leaf: true,
                        selected:true,
                        view: 'dashbordview',
                        badgeText: '3'  // Example badge
                    },
                    {
                        text: 'Employees',
                        iconCls: 'x-fa fa-users',
                        leaf: true,
                        view: 'mainlist'
                    },
                    {
                        text:'Catalog Tree',
                        iconCls: 'x-fa fa-users',
                        leaf: true,
                        view: 'cataloglist'
                    },
                    {
                        text: 'Stocks',
                        iconCls: 'x-fa fa-hotel',
                        leaf: true,
                        badgeText: '5'
                    },
                    {
                        text: 'Stores',
                        iconCls: 'x-fa fa-warehouse',
                        leaf: true,
                        badgeText: '5'
                    },
                    {
                        text: 'Products',
                        iconCls: 'x-fa fa-cube',
                      
                        children: [
                            {
                                text: 'Product List',
                                iconCls: 'x-fa fa-list',
                                leaf: true,
                                itemId: 'product-list',
                                cls: 'menu-item',
                                badgeText: '10'
                            },
                            {
                                text: 'Cegid Product List',
                                iconCls: 'x-fa fa-list',
                                leaf: true,
                                itemId: 'cegid-product-list',
                                cls: 'menu-item'
                            },
                            {
                                text: 'Product Categories',
                                iconCls: 'x-fa fa-tags',
                                leaf: true,
                                itemId: 'product-categories',
                                cls: 'menu-item'
                            }
                        ]
                    },
                    {
                        text: 'Customers',
                        iconCls: 'x-fa fa-users',
                       
                        children: [
                            {
                                text: 'Customer List',
                                iconCls: 'x-fa fa-list-ul',
                                leaf: true,
                                itemId: 'customer-list',
                                cls: 'menu-item'
                            },
                            {
                                text: 'Customer Feedback',
                                iconCls: 'x-fa fa-comments',
                                leaf: true,
                                itemId: 'customer-feedback',
                                cls: 'menu-item',
                                badgeText: '7'
                            }
                        ]
                    }

                ]
            }
        }
    }
});