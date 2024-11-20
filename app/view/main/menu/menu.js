Ext.define('Techno.view.main.MainMenu', {
    extend: 'Ext.list.Tree',
   
    xtype: 'sidemenu',
    collapsed: true,
    layout: 'accordion',
    cls:'side-menu',
    width: 240,
    rootVisible: false,
    store: {
      type: 'tree',
      root: {
        expanded: true,
        children: [
          { 
              text: 'Dashboard', 
              iconCls: 'x-fa fa-home', 
              leaf: true, 
              view: 'dashboardview',
              itemId: 'dashboard',
              cls: 'menu-item',
              badgeText: '3'  // Example badge
          },
          {
              text: 'Products',
              iconCls: 'x-fa fa-cube',
              expanded: true,
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
              text: 'Stocks', 
              iconCls: 'x-fa fa-warehouse', 
              leaf: true, 
              itemId: 'stocks', 
              cls: 'menu-item',
              badgeText: '5'
          },
          {
              text: 'Customers',
              iconCls: 'x-fa fa-users',
              expanded: true,
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
          },
          { 
              title: 'Employees', 
              iconCls: 'x-fa fa-users', 
              leaf: true, 
              itemId: 'employees', 
              layout: 'fit', 
              view: 'mainlist',
              cls: 'menu-item'
          }
      ]
      }
    },
    listeners: {
      itemclick: function (tree, record) {
        /* let view = record.node.get('view');
         let tabPanel = tree.up('viewport').down('maincontent');
         tabPanel.add(view);
         tabPanel.setActiveTab(view);*/
      }
    },
    itemCls: 'menu-item-hover'
});