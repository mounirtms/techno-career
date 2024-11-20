Ext.define('DashController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.dashcontroller',

  loadGrid: function () {
    const grid = this.getView(); // Get the view (the grid)
    const store = grid.getViewModel().getStore(grid.storeName);
    store.load();
debugger
  },



});