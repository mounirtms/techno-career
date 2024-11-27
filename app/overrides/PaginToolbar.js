//
// Update to make Paging Toolbar work with modern locked grid
//
Ext.define('Techno.view.overrides.PagingToolbar', {
    override: 'Ext.grid.plugin.PagingToolbar',

    init: function (cmp) {
  
        cmp.on({
            initialize: function (cmp) {
                var grid = cmp.isLockedGrid ? cmp.getRegion('center').getGrid() : cmp;

                this.setGrid(grid);
                cmp.add(this.getToolbar());
            },
            scope: this
        })
    },

    onPageChange: function (toolbar, pageData) {
 
        let grid = this.getGrid(),
            store = grid.getStore(),
            params = store.getProxy().getExtraParams();

        params['searchCriteria[currentPage]'] = pageData;
        store.getProxy().setExtraParams(params)
        // Load the store with updated parameters (for the next page)
        store.load();
    }

});
