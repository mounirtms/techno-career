Ext.define('Techno.view.components.Toast', {
    extend: 'Ext.Toast',
    xtype: 'mytoast',
    
    // Default toast alignment
    alignment: 'tc-tc',
 
 
    // Default config (can be overridden by subclasses)
    config: {
        bodyStyle: {
            background: 'blue', // Default background color
            padding: '10px',
            color: 'white', // Default text color
        }
    },
    listeners: {
        beforeshow: function (sender, eOps) {
            setTimeout(function () {
                sender.hide();
            }, sender._timeout);
        }
    }
});
Ext.define('Techno.view.components.Toast.Success', {
    extend: 'Techno.view.components.Toast',
    xtype: 'successToast',

    config: {
        bodyStyle: {
            background: 'green',  // Success background color
            padding: '10px',
            color: 'white',  // Text color for success toast
        }
    }
});
Ext.define('Techno.view.components.Toast.Error', {
    extend: 'Techno.view.components.Toast',
    xtype: 'errorToast',

    config: {
        bodyStyle: {
            background: 'red',  // Error background color
            padding: '10px',
            color: 'white',  // Text color for error toast
        }
    }
});
 
Ext.define('Techno.view.components.Toast.Warning', {
    extend: 'Techno.view.components.Toast',
    xtype: 'warningToast',

    config: {
        bodyStyle: {
            background: 'yellow',  // Warning background color
            padding: '10px',
            color: 'black',  // Text color for warning toast
        }
    }
});
