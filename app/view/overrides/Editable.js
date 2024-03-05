Ext.define('Techno.view.overrides.Editable', {
    override: 'Ext.grid.plugin.Editable',
    alias: 'plugin.grideditable',

    onSubmitTap: function() {
        let me = this,
            record = me.form.getRecord(),
            data = me.form.getValues();

        if (this.form.isEdit) {
            data.updateDT = new Date();
            data.updatedBy = firebase.auth().currentUser.uid;
            firebase.database().ref(this.getGrid().path + '/' + record.get('id')).update(data)
                    .then(function() {
                        me.successSync(record, data);
                    })
                    .catch(function(error) {
                        console.error('Error updating record:', error);
                    });
        }
        else {
            data.insertDT = new Date();
            data.insertedBy = firebase.auth().currentUser.uid;
            firebase.database().ref(this.getGrid().path).push(data)
                    .then(function() {
                        me.successSync(record, data);

                    })
                    .catch(function(error) {
                        console.error('Error adding new record:', error);
                    });
        }
    },

    successSync: function(record, data) {
        record.set(data);
        this.sheet.hide();
    },

    removeSync: function(path) {
        firebase.database().ref(path).remove()
                .then(function() {
                    console.log('Record removed successfully');
                })
                .catch(function(error) {
                    console.error('Error removing record:', error);
                });
    },

    onTrigger: function(grid, isEdit) {
        debugger
        let me = this,
            record = grid.getSelection(),
            formConfig = me.getFormConfig(),
            toolbarConfig = me.getToolbarConfig(),
            fields,
            form,
            sheet,
            toolbar;

        // Don't want to react to grid headers etc
        if (!record) {
            return;
        }

        if (formConfig) {
            me.form = form = Ext.factory(formConfig, Ext.form.Panel);
        }
        else {
            me.form = form = Ext.factory(me.getDefaultFormConfig());

            fields = me.getEditorFields(grid.getColumns());
            form.down('fieldset').setItems(fields);
            form.clearFields = true;
        }
        me.form.isEdit = isEdit;

        toolbar = Ext.factory(toolbarConfig, Ext.form.TitleBar);
        me.submitButton = toolbar.down('button[action=submit]');
        toolbar.down('button[action=cancel]').on('tap', 'onCancelTap', me);
        me.submitButton.on('tap', 'onSubmitTap', me);

        // We sync the enabled state of the submit button with form validity
        form.on({
            change: 'onFieldChange',
            delegate: 'field',
            scope: me
        });

        form.setRecord(record);

        me.sheet = sheet = grid.add({
            xtype: 'sheet',
            items: [toolbar, form],
            hideOnMaskTap: true,
            enter: 'right',
            exit: 'right',
            right: 0,
            width: 320,
            layout: 'fit',
            stretchY: true,
            hidden: true
        });

        if (me.getEnableDeleteButton()) {
            form.add({
                xtype: 'button',
                text: 'Delete',
                ui: 'decline',
                margin: 10,
                handler: function() {
                    grid.getStore().remove(record);
                    form.isEdit && me.removeSync(grid.path + '/' + record.get('id'));
                    sheet.hide();
                }
            });
        }

        sheet.on('hide', 'onSheetHide', me);

        sheet.show();
    }
});