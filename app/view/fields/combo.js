Ext.define('Techno.view.fields.Combo', {
    extend: 'Ext.field.ComboBox',
    xtype: 'combobox',
    floatedPicker: {
        plugins: {
            pagingtoolbar: {
                autoPaging: true
            }
        }
    }
});
Ext.define('Techno.view.fields.ProvinceCombo', {
    extend: 'Techno.view.fields.Combo',
    xtype: 'provincecombo',

    displayField: 'name',
    valueField: 'name',
    queryMode: 'local',
    store: {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/wilaya.json',
            reader: {
                type: 'json'
            }
        }
    },
    listeners: {
        change: function(fld) {
            let subprovincecombo = fld.up('formpanel').down('subprovincecombo');
            subprovincecombo.getStore().setData(Ext.Provinces[fld.getValue()]);
        }
    }
});



Ext.define('Techno.view.fields.SubProvinceCombo', {
    extend: 'Techno.view.fields.Combo',
    xtype: 'subprovincecombo',
    displayField: 'daira_name_ascii',
    valueField: 'daira_name_ascii',
    queryMode: 'local',
    store:{data:[]},
    listeners: {
        change: function(fld) {
            let data = fld.getStore().getData(),
                communecombo = fld.up('formpanel').down('communecombo'),
                store = communecombo.getStore(),
                items = [];
            data.items.forEach(rec => {rec.data.daira_name_ascii === fld.getValue() && items.push(rec.data); });
            store.setData(items);
            Ext.isEmpty(items) && communecombo.setValue(null);
        }
    }
});


Ext.define('Techno.view.fields.CommuneCombo', {
    extend: 'Techno.view.fields.Combo',
    xtype: 'communecombo',
    displayField: 'commune_name_ascii',
    valueField: 'commune_name_ascii',
    queryMode: 'local',
    store:{data:[]}
});