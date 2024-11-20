Ext.define("Techno.view.main.MainTabs", {
    extend: 'Ext.tab.Panel',
    xtype: 'maincontent',
  
    activeTab: 0,
    items: [{
      title: 'Dashboard',
      closable: false,
      iconCls: 'x-fa fa-home',
      xtype: 'dashbordview'
    },
    {
      title: 'Employee Lists',
      iconCls: 'x-fa fa-users',
      layout: 'fit',
      items: { xtype: 'mainlist' }
    }]
});