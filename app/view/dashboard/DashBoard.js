Ext.define("Techno.view.main.Dashboard", {
    extend: 'Ext.container.Container',

    xtype: 'dashbordview',
    title: 'Dashboard',
    closable: false,
    iconCls: 'x-fa fa-home',

    layout: 'auto',
    scrollable: true,
    scrollable: 'y', // Scroll vertically if the content exceeds the height

    height: '100vh', // Ensure the container fills the viewport height


    items: [
        { xtype: 'dashboardcards' },
        {
            xtype: 'dashgridpanel',
            items: [
                { items: { xtype: 'orderstable', flex: 1, } },
                { items: { xtype: 'productstable', flex: 1, } },
            ]
        },
        {
            xtype: 'dashgridpanel',
            items: [
                { items: { xtype: 'customerstable', flex: 1, } },
                { items: { xtype: 'invoicetable', flex: 1, } },
            ]
        },

    ]
});