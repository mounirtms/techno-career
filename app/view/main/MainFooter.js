Ext.define("Techno.view.main.MainFooter", {
  extend: 'Ext.Toolbar',
  xtype: 'mainfooter',
  height: 26,
 
  ui: 'footer', 
  items: [
    { xtype: 'component', html: '© 2024 Techno Stationary' },
    '->',
    {
      xtype: 'component',
      html: '1.0.0', // You can use an icon for the menu toggle button
    }
  ]
});