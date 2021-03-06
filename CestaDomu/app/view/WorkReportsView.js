/*
 * File: app/view/WorkReportsView.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CestaDomu.view.WorkReportsView', {
    extend: 'Ext.Container',
    alias: 'widget.workReportsView',

    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.field.Select',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Výkazy práce'
            },
            {
                xtype: 'formpanel',
                height: 161,
                items: [
                    {
                        xtype: 'selectfield',
                        itemId: 'employee',
                        margin: 5,
                        label: 'Zaměstnanec',
                        name: 'employee',
                        displayField: 'comboLabel',
                        store: 'EmployeesStore',
                        usePicker: 'auto',
                        valueField: 'ID'
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'timeInterval',
                        margin: 5,
                        label: 'Období',
                        name: 'timeInterval',
                        value: 1,
                        displayField: 'label',
                        store: 'WorkReportIntervals',
                        valueField: 'id'
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'loadWorkReports',
                                margin: 5,
                                text: 'Načíst výkazy práce'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                itemId: 'createWorkReports',
                                margin: 5,
                                text: 'Vytvořit přehled z načtených výkazů'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'list',
                flex: 100,
                emptyText: 'Žádné záznamy',
                itemTpl: [
                    '<tpl if="label">',
                    '{label}',
                    '</tpl>',
                    '<tpl if="!label">',
                    '    <div style="background: red;">',
                    '        Chybný záznam',
                    '    </div>',
                    '</tpl>',
                    ''
                ],
                store: 'WorkReportsStore'
            }
        ]
    }

});