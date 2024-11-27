Ext.define("Techno.view.main.MainCard", {
    extend: 'Ext.Panel',
    xtype: 'maincontent',
   
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
        iconCls: 'x-fa fa-cog',
        handler: 'openSettingsWindow'
    }
    ],
    items: [{
        
        xtype: 'dashbordview'
    }]
});