Ext.define("Techno.view.main.MainCard", {
    extend: 'Ext.Panel',
    xtype: 'maincontent',
    maxHeight: window.innerHeight - 80,
    tbar: [{
        text: '☰',
        handler: 'toggleMenuMode'
    },
    {
        bind:{
            html:'{cardTitle}'
        }
    },
    {
        xtype: 'spacer'
    },
    {
        xtype: 'button',
        iconCls: 'x-fa fa-cogs',
        handler: 'openSettingsWindow'
    }
    ],
    items: [{
        xtype: 'dashbordview'
    }]
});