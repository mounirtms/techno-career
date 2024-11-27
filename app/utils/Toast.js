Ext.define('Techno.util.Toast', {
    singleton: true,  // Singleton pattern
    alternateClassName: 'Toast',  // Alternate class name for easier access

    config: {
        timeout: 3000,  // Duration for the toast
    },


    showToast: function (message, type, options) {
        // If type is not provided, set it to 'info' by default
        type = type || 'info';
        options = Ext.merge(this.config, options || {});

        // Merge custom options with the default config
        options = Ext.merge({ message: message, }, this.getConfig(), options || {});
     
        var toast;
        switch (type) {
            case 'success':
                toast = Ext.create('Techno.view.components.Toast.Success', options)
                break;
            case 'error':
                toast = Ext.create('Techno.view.components.Toast.Error', options)
                break;
            case 'info':
                toast = Ext.create('Techno.view.components.Toast.Info', options)
                break;
            case 'warning':
                toast = Ext.create('Techno.view.components.Toast.Warning', options)
                break;
            default:
                toast = Ext.create('Techno.view.components.Toast.Info', options)
        }

        // Show the toast notification
        toast.show({
            animation: {
                type: 'fadeIn',
                duration: 1500,
                easing: 'ease-out'
            },
            alignment: {
                component: document.body,
                alignment: 't-t',

            }
        });
    },

    // Method for each type of toast
    showSuccess: function (message, options) {
        this.showToast(message, 'success', options);
    },

    showError: function (message, options) {
        this.showToast(message, 'error', options);
    },

    showInfo: function (message, options) {
        this.showToast(message, 'info', options);
    },

    showWarning: function (message, options) {
        this.showToast(message, 'warning', options);
    }
});
