// Define the Cards (Dashboard Widgets)
Ext.define('Techno.view.main.DashCards', {
    extend: 'Ext.container.Container',
    xtype: 'dashboardcards',
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },
    padding: 20,
    layout: 'hbox',
    items: [
        {
            xtype: 'card',
            data: {
                icon: 'fa-dollar-sign',
                value: '80',
                label: 'Sales'
            }
        },
        {
            xtype: 'card',
            data: {
                icon: 'fa-eye',
                value: '1,504',
                label: 'Daily Views'
            }
        },
        {
            xtype: 'card',
            data: {
                icon: 'fa-comment',
                value: '284',
                label: 'Comments'
            }
        },
        {
            xtype: 'card',
            data: {
                icon: 'fa-credit-card',
                value: '$7,842',
                label: 'Earnings'
            }
        }
    ],
    // Add responsive config for dynamic layouts based on screen size
    responsiveConfig: {
        // For large screens, show all cards in one row (using flex: 1)
        'width > 800': {
            layout: { type: 'hbox', align: 'stretch' },
            defaults: { flex: 1 }  // Each card takes equal space in a row
        },

        // For smaller screens (e.g., tablets), show two cards per row
        'width <= 800 && width > 500': {
            layout: { type: 'hbox', align: 'stretch', pack: 'center' },
            defaults: { flex: 1, width: '45%' }  // Cards take 45% of width for 2 cards per row
        },

        // For very small screens (e.g., phones), stack the cards vertically
        'width <= 500': {
            layout: { type: 'vbox', align: 'stretch' },
            defaults: { flex: 1, width: '100%' }  // Cards take 100% of width
        }
    }
});