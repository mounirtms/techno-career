Ext.define('Techno.view.main.Card', {
    extend: 'Ext.Component',
    xtype: 'card',
    viewModel: 'main',
    tpl: [
        '<div class="card-panel">',
        '<div class="card-content">',
        '<div class="card-icon-number">',
        '<div class="number">',
        '<i class="fa {icon} icon"></i>', // Icon (fa class)
        '<span class="number-value">{value}</span>', // Dynamically bound value
        '</div>',
        '</div>',
        '<div class="card-label">',
        '<span class="label-text">{label}</span>', // Label for the card
        '</div>',
        '</div>',
        '</div>',
    ]

});