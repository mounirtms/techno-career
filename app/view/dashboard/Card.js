// Ext JS Template Definition
Ext.define('Techno.view.main.Card', {
    extend: 'Ext.Component',
    xtype: 'card',

    tpl: ['<div class="card-panel">',
            '<div class="card-content">',
                '<div class="card-icon-number">',
                    '<div class="number">',
                        '<i class="fa {icon} icon"></i>', // Icon (fa class)
                        '<span class="number-value">{value}</span>', // Number value
                    '</div>',
                '</div>',
                '<div class="card-label">',
                    '<span class="label-text">{label}</span>', // Label
                '</div>',
            '</div>',
        '</div>',
    ],

    data: {
        icon: 'fa-dollar-sign',   // Default icon
        value: '80',              // Default value
        label: 'Sales'            // Default label
    }
});
