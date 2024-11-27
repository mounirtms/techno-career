Ext.define('Techno.view.main.BaseWindow', {
    extend: 'Ext.window.Window',
    xtype: 'basewindow',

    title: 'Base Window',
    width: 400,
    height: 300,
    modal: true,


 
    // Optionally, add a method for closing the window
    closeWindow: function () {
        this.close();
    },

    // More window functionality as needed...
});
