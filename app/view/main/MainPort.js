Ext.define('Techno.view.main.MainPort', {
    extend:'Ext.container.Container',
    fullscreen: true,
    layout: 'vbox',
    items: [
      {
        xtype: 'container',
        layout: 'hbox',
        flex: 1,
        height: '100%',
        items: [
          {
            xtype: 'container',
            width: 240,
            layout: 'vbox',
            items: [
              {
                xtype: 'component',
                margin: 10,
                html: '<img src="resources/logo_techno.png" width="220" alt="Logo">',
              },
              { xtype: 'sidemenu' }]
          },
          { xtype: 'maincontent', width: '100%', height: '100%', flex: 1 }
        ]
      },
      { xtype: 'mainfooter', width: '100%', margin: '5 0 0 0' }
    ]
});

 