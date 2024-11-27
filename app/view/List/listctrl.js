Ext.define("Techno.view.main.ListController", {
    extend: "Ext.app.ViewController",
    alias: "controller.listctrl",

    init: function () {
        !Ext.Provinces &&
            fetch('resources/provinces.json')
                .then(res => res.json())
                .then(data => {
                    Ext.Provinces = data;
                });
    },


    loadData: function (arg) {
        let grid = this.getView(), // Get the view (the grid)
            store = grid.getStore();
        // Sample local data to inject


        // Update the ViewModel data
        store.initialLoading = !arg;
        if (grid.api && Techno.magentoAccessToken) {

            store.getProxy().setUrl(Techno.magentoApiUrl + grid.api.read.url)

            let activeFilters = store.getFilters().getRange(),
                filterValues = {};

            // Loop through the filters and store the field names and values
            activeFilters.forEach(function (filter, index) {
                filterValues['searchCriteria[filterGroups][' + index + '][filters][' + index + '][field]'] = filter.getProperty();
                filterValues['searchCriteria[filterGroups][' + index + '][filters][' + index + '][value]'] = filter.getValue();

            });
            Ext.merge(filterValues, grid.api.read.defaultParams)

            store.getProxy().setExtraParams(filterValues);

            store.load();




            /* Req.do(Techno.magentoApiUrl + grid.api.read.url, { params: grid.api.read.params }).then(res => {
                 debugger
             })*/

        } else
            if (grid.localData) {
                // Fetch data from a local JSON file (from resources/data/{localData}.json)
                fetch('resources/data/' + grid.localData + '.json')
                    .then(res => res.json())
                    .then(data => {
                        grid.getStore().setData(data);
                    });
            } else {
                if (grid.path) {
                    // Fetch data from Firebase
                    firebase.database().ref(grid.path).on('value', function (snapshot) {
                        let response = snapshot.val();
                        Object.keys(response).forEach(key => {
                            response[key].id = key;
                        });
                        grid.getStore().setData(Object.values(response));  // Add the data to the store
                    });
                }
            }
    },

   

    addNew: function () {
        let grid = this.getView(),
            store = grid.getViewModel().getStore('dataStore'),
            newRecord = {
                id: store.getCount() + 1,
                email: '',
                firstname: '',
                lastname: '',
                phone: '',
                province: '',
                commune: '',
                position: ''
            };

        grid.setSelection(store.add(newRecord)[0]);

        grid.getPlugin('grideditable').onTrigger(grid, false);

    },



    doListSettings: function (btn) {
        
    },

    doExport: function (btn) {

    },

    statusRenderer: function (value) {
        var statusClass = '';
        var statusText = value || 'Unknown Status';
        // Map of status values to CSS classes
        var statusMap = {
            'processing': 'inProgress',
            'Commande_a_livrer': 'inProgress',
            'pending': 'pending',
            'Commande_a_recuperer': 'pending',
            'completed': 'delivered',
            'canceled': 'canceled',
            'closed': 'closed',
            'fraud': 'fraud',
            'Conf_CMD_1': 'confirmationPending',
            'Commande_en_livraison_prestataire': 'deliveryInProgress',
            'Livraison_Confirmee': 'deliveryConfirmed',
            'CMD_Done': 'orderCompleted'
        };
        // Get the appropriate status class from the map
        statusClass = statusMap[value] || 'unknown'; // Default to 'unknown' if no match is found
        statusText = statusText || 'Unknown Status'; // Set default text if status is null or undefined

        arguments[3].el.dom.innerHTML = '<div class="status ' + statusClass + '">' + statusText + '</div>';
    },

    showAllList: function () {
        let me = this,
            view = me.getView(),
            card = { xtype: view.xtype, mainCard: true },
            title = view.text,
            container = view.up('mainport'),
            viewModel = container.getViewModel(),
            mainCard = container.down('maincontent');

        if (view) {
            mainCard.removeAll();
            mainCard.add(card);
            viewModel.set('cardTitle', title)
        }

    },

    collapseGrid: function () {
        let me = this,
            grid = this.getView(),
            panel = grid.up();

        panel.setConfig({ header: true });
        panel.collapse();
        panel.setConfig({ header: true, title: grid.text });

    },


    destroy: function () {
        this.toolMenu = Ext.destroy(this.toolMenu);
        this.callParent();
    },

    getMenu: function () {
        var menu = this.toolMenu,
            view = this.getView();

        if (!menu) {
            this.toolMenu = menu = Ext.create(Ext.apply({
                ownerCmp: view
            }, view.toolContextMenu));
        }

        return menu;
    },

    updateMenu: function (record, el, e, align) {
        var menu = this.getMenu();
        this.getViewModel().set('record', record.getData());
        menu.autoFocus = !e.pointerType;
        menu.showBy(el, align);
    },

    onContextMenu: function (e) {

        let
            target = e.getTarget('.x-gridrow'), // Use the correct itemSelector for rows
            item;

        if (target) {
            e.stopEvent();
            item = Ext.getCmp(target.id);

            if (item) {
                this.updateMenu(item.getRecord(), item.el, e, 't-b?');
            }
        }
    },

    onMenu: function (grid, context) {
        this.updateMenu(context.record, context.tool.el, context.event, 'r-l?');
    },




    setupStoreListeners: function (store) {
        Ext.destroy(this.storeListeners);
        this.storeListeners = store.on({
            filterchange: 'onFilterChanged',
            scope: this
        });
    },

    doReconfigure: function (menu) {
        var config = menu.grid,
            grid = this.getView(),
            store, filters;

        // we set the store first because columns may bring additional filters on the store
        grid.setStore(config.store);
        grid.setColumns(config.columns);

        store = grid.getStore();

        this.setupStoreListeners(store);
        filters = store.getFilters(false);
        this.getViewModel().set('filtered', filters && filters.length > 0);
    },

    concatNames: function (v, rec, cell) {
        return rec.get('forename') + ' ' + rec.get('surname');
    },

    renderMailto: function (v) {
        return '<a href="mailto:' + v + '">' +
            Ext.htmlEncode(v) + '</a>';
    },

    showFilterBar: function () {
        this.getView().showFilterBar();
    },

    hideFilterBar: function () {
        this.getView().hideFilterBar();
    },

    onFilterChanged: function (store, filters) {
        this.getViewModel().set('filtered', filters.length > 0);
    },

    clearFilters: function () {
        var filters = this.getView().getStore().getFilters(false);

        if (filters) {
            filters.removeAll();
        }
    }
});
