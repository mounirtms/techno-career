Ext.define("Techno.view.main.MainFooter", {
  extend: 'Ext.panel.Panel',
  xtype: 'mainfooter',
  height: 36,
  ui: 'footer',

  items: [
    { xtype: 'component', html: '© 2024 My Application' },
    {
      xtype: 'button',
      text: '☰', // You can use an icon for the menu toggle button
      cls: 'menu-toggle-button',
      handler: function() {
          var menu = Ext.ComponentQuery.query('panel[cls=side-menu]')[0];
          menu.setHidden(!menu.isHidden());
      }
  }
  ]
});