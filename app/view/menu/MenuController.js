Ext.define('Techno.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tree-list',

    init: function () {
        var treelist = this.lookup('treelist');
        treelist.setUi('nav');
        treelist.setExpanderFirst(false);

    },

    onMenuClick: function (tree, record) {
        let view = record.node.get('view'),
            title = record.node.get('text'),
            container = tree.up('mainport'),
            viewModel = container.getViewModel(),
            mainCard = container.down('maincontent');

        if (view) {
            mainCard.removeAll();
            mainCard.add({ xtype: view, mainCard: true });
            viewModel.set('cardTitle', title)
        }
    }
});