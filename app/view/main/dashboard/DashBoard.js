Ext.define("Techno.view.main.Dashboard", {
    extend: 'Ext.container.Container',
    layout: 'vbox',
    xtype: 'dashbordview',
    title: 'Dashboard',
    closable: false,
    iconCls: 'x-fa fa-home',
    items: [
       { xtype: 'dashboardcards' },
        {
            xtype: 'container',
            layout: { type: 'hbox', align: 'stretch' },
            margin: 20,
            items: [
                { xtype: 'orderstable', flex: 1, margin: 10 },
                { xtype: 'customerstable', flex: 1, margin: 10 }
            ]
        }
    ]
});