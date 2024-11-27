Ext.define('Techno.view.main.SettingsWindow', {
    extend: "Ext.window.Window",
    xtype: 'settingswindow',

    title: 'API Settings',  // Window title
    width: 400,

    modal: true,
    layout: 'vbox',
    closable: true,
    draggable: true,
    resizable: false,  // You can enable this if resizing is needed

    items: [
        {
            xtype: 'textfield',
            label: 'Magento API URL',
            name: 'magentoApiUrl',
            allowBlank: false,  // This field is required
            labelAlign: 'top',
            width: '100%'
        },
        {
            xtype: 'textfield',
            label: 'Magento Access Token',
            name: 'magentoAccessToken',
            allowBlank: false,  // This field is required
            labelAlign: 'top',
            width: '100%'
        },
        {
            xtype: 'textfield',
            label: 'Cegid API URL',
            name: 'cegidApiUrl',
            allowBlank: false,  // This field is required
            labelAlign: 'top',
            width: '100%'
        },
        {
            xtype: 'textfield',
            label: 'Cegid Access Token',
            name: 'cegidAccessToken',
            allowBlank: false,  // This field is required
            labelAlign: 'top',
            width: '100%'
        }
    ],

    buttons: [
        {
            text: 'Save',
            handler: function (btn) {
                var wind = btn.up('settingswindow'),
                    fields = wind.query('textfield');  // Assuming you wrap these fields in a form
               
                    fields.forEach(element => {
                        localStorage.setItem(element.name, element.getValue()||'');
                    });
                    Toast.showSuccess('Settings Updated');
                    wind.close();
                 
            }
        },
        {
            text: 'Cancel',
            handler: function (btn) {
                btn.up('settingswindow').close();
            }
        }
    ],
    listeners: {
        initialize: function(win) {
            
            let fields = win.query('textfield');
           
            // Loop through the fields and set values from localStorage
            fields.forEach(field=> {
              field.setValue(localStorage.getItem(field.name));
            });
        }
    }

});
