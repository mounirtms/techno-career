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
                        selected: true,
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
                        text: 'Sales',
                        iconCls: 'x-fa  fa-hand-holding-usd', 
                        children: [
                            {
                                text:'Orders List',
                                iconCls: 'x-fa fa-luggage-cart',
                                leaf: true,
                                view:'orderstable'
                            },
                            {
                                text:'Invoice List',
                                iconCls: 'x-fa fa-file-invoice-dollar', 
                                leaf: true,
                                view:'invoicetable'
                            }
                        ]
                    },
                    {
                        text: 'Inventory',
                        iconCls: 'x-fa fa-store-alt',
                        children: [
                            {
                                text: 'Catalog Tree',
                                iconCls: 'x-fa fa-sitemap',
                                leaf: true,
                                view: 'cataloglist'
                            },
                            {
                                text: 'Stores',
                                iconCls: 'x-fa fa-warehouse',
                                leaf: true, 
                            },
                            {
                                text: 'Stocks',
                                iconCls: 'x-fa fa-boxes',
                                leaf: true, 
                            },
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
                                view: 'customerstable'
                            },
                            {
                                text: 'Customer Feedback',
                                iconCls: 'x-fa fa-comments',
                                leaf: true, 
                            }
                        ]
                    }

                ]
            }
        }
    }
});