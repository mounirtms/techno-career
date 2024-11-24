Ext.define("Techno.view.main.ListController", {
    extend: "Ext.app.ViewController",
    alias: "controller.listctrl",

    config: {
        checkAll: true
    },

    init: function () {
        !Ext.Provinces &&
            fetch('resources/provinces.json')
                .then(res => res.json())
                .then(data => {
                    Ext.Provinces = data;
                });
    },


    loadData: function () {
        let grid = this.getView(); // Get the view (the grid)
        let store = grid.getViewModel().getStore('dataStore');
  
        
        // Sample local data to inject
        if (grid.localData) {
            // Fetch data from a local JSON file (from resources/data/{localData}.json)
            fetch('resources/data/' + grid.localData + '.json')
                .then(res => res.json())
                .then(data => {
                  
                    store.add(data);
                });
        } else {
            if (grid.path) {
                // Fetch data from Firebase
                firebase.database().ref(grid.path).on('value', function (snapshot) {
                    let response = snapshot.val();
                    Object.keys(response).forEach(key => {
                        response[key].id = key;
                    });
                    store.add(Object.values(response));  // Add the data to the store
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

    showAllList:function(){
        
        
    },

    destroy: function() {
        this.toolMenu = Ext.destroy(this.toolMenu);
        this.callParent();
    },

    getMenu: function() {
        var menu = this.toolMenu,
            view = this.getView();

        if (!menu) {
            this.toolMenu = menu = Ext.create(Ext.apply({
                ownerCmp: view
            }, view.toolContextMenu));
        }

        return menu;
    },

    updateMenu: function(record, el, e, align) {
        var menu = this.getMenu();
        this.getViewModel().set('record', record.getData());
        menu.autoFocus = !e.pointerType;
        menu.showBy(el, align);
    },

    onContextMenu: function(e) {
        
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

    onMenu: function(grid, context) {
        this.updateMenu(context.record, context.tool.el, context.event, 'r-l?');
    },




});
