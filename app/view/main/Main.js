/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Techno.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: ['Ext.MessageBox', 'Ext.layout.Fit'],
    controller: 'main',
    viewModel: 'main',
    bind: {
        hidden: '{!isLoggedIn}'
    },
    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },
    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: {xtype: 'mainlist'}
        },
        {
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {

            }
        }
    ],

    tabBarPosition: 'bottom',
    listeners: {
        beforeshow: function(sender, eOpts) {
            let me = this,
                vm = me.getViewModel(),
                runningSession = vm.get('running');

            if (!runningSession) {
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
