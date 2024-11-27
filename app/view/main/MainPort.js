Ext.define('Techno.view.main.MainPort', {
  extend: 'Ext.container.Container',
  xtype: 'mainport',
  fullscreen: true,
  layout: 'vbox',
  controller: 'main',

  requires: [
    'Ext.grid.Tree',
    'Ext.Responsive',
    'Ext.util.*'
  ],

  viewModel: {
    type: 'main'
  },
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
              html: '<img src="resources/imgs/logo_techno.png" width="220" alt="Logo">',
            },
            { xtype: 'tree-list' }
          ]
        },
        {
          xtype: 'maincontent',
          width: '100%',
          height: '100%',
          flex: 1
        }
      ]
    },
    { xtype: 'mainfooter', width: '100%', margin: '5 0 0 0' }
  ],
  listeners: {
    beforeshow: function (sender, eOpts) {
      let me = this,
        vm = me.getViewModel();
      Ext.runningSession = vm.get('running');

      if (!Techno.magentoAccessToken) {
        vm.set('running', 1);
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            vm.set('isLoggedIn', true);
          }
          else {
            Ext.create('Techno.view.Login').show();
          }
        });
      }
    }
  }
});