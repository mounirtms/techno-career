// Define the Cards (Dashboard Widgets)
Ext.define('Techno.view.main.DashCards', {
    extend: 'Ext.container.Container',
    xtype: 'dashboardcards',
    viewModel: { type: 'main' },
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },
    padding: 20,
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },
    items: [
        {
            xtype: 'card',
            data: {
                icon: 'fa-dollar-sign',
                bind: {
                    value: '{totalRevenue}' // Bind to totalRevenue in ViewModel
                },
                label: 'Revenue'
            }
        },
        {
            xtype: 'card',
            data: {
                icon: 'fa-tag',
                bind: {
                    value: '{totalProducts}' // Bind to totalProducts in ViewModel
                },
                label: 'Total Products'
            }
        },
        {
            xtype: 'card',
            data: {
                icon: 'fa-cart-plus',
                bind: {
                    value: '{totalOrders}' // Bind to totalOrders in ViewModel
                },
                label: 'Total Orders'
            }
        },
        {
            xtype: 'card',
            data: {
                icon: 'fa-address-book',
                bind: {
                    value: '{totalCustomers}' // Bind to totalCustomers in ViewModel
                },
                label: 'Customers'
            }
        }
    ],
    // Add responsive config for dynamic layouts based on screen size
    responsiveConfig: {
        // For large screens, show all cards in one row (using flex: 1)
        'width > 900': {
            layout: { type: 'hbox', align: 'stretch' },
            defaults: { flex: 1 }  // Each card takes equal space in a row
        },

        // For smaller screens (e.g., tablets), show two cards per row
        'width <= 900 && width > 500': {
            layout: { type: 'vbox', align: 'stretch' },
            defaults: { flex: 1, width: '45%' }  // Cards take 45% of width for 2 cards per row
        },

        // For very small screens (e.g., phones), stack the cards vertically
        'width <= 500': {
            layout: { type: 'vbox', align: 'stretch' },
            defaults: { flex: 1, width: '100%' }  // Cards take 100% of width
        }
    }
});