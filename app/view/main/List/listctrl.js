Ext.define("Techno.view.main.ListController", {
    extend: "Ext.app.ViewController",
    alias: "controller.listctrl",

    loadGrid: function(grid) {

        let store = grid.getViewModel().getStore('dataStore');

        // Empty the store before adding new records
        store.removeAll();

        firebase.database().ref(grid.path).on('value', function(snapshot) {
            let response = snapshot.val();
            Object.keys(response).forEach(key => {
                response[key].id = key;
            });
            store.add(Object.values(response));
        });

    },
    loadData: function() {
        this.loadGrid(this.getView());
    },

    addNew: function() {
        let grid = this.getView(),
            store = grid.getViewModel().getStore('dataStore'),
            newRecord = {
                id: store.getCount() + 1,
                email: '',
                name: '',
                phone: ''
            };

        grid.setSelection(store.add(newRecord)[0]);

        grid.getPlugin('grideditable').onTrigger(grid, false);

    }

});
