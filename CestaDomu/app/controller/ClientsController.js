/*
 * File: app/controller/ClientsController.js
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

Ext.define('CestaDomu.controller.ClientsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {
        routes: {
            'private/contacts': 'main'
        },

        refs: {
            mainContainer: 'mainContainer',
            clientsView: {
                autoCreate: true,
                selector: 'clientsView',
                xtype: 'clientsView'
            },
            searchText: '#searchText',
            clientsList: 'clientsView #clientsList'
        },

        control: {
            "#searchButton": {
                tap: 'onSearchButtonTap'
            },
            "clientsView #clientsList": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onSearchButtonTap: function(button, e, eOpts) {
        CestaDomu.controller.Login.doLogged( this, function () {
            var searchText = this.getSearchText().getValue();
            var store = this.getClientsList().getStore();
            store.clearFilter(true);
            if (searchText) {
                if (searchText.length > 2) {
                    store.filter('name', searchText);
                    store.load();
                } else {
                    Ext.Msg.alert('Příliš obecné hledání', 'Pro vyhledání podle jména je nutné zadat více než 2 znaky, jinak by množství nalezených záznamů mohlo být příliš velké.');
                }
            } else {
                store.filter('xml', '<Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="IsNULL"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="DateOfDeath" displayName="Datum úmrtí" type="3" /></Element></Item></ElementCollection></SubElements><AdditionalData function="false" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="IsNULL"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="{pb:Project}.{b:CareStartEnd}.careStart" displayName="-Karty pacientů.+Přijetí/propuštění z péče.Datum začátku" type="3" /></Element></Item></ElementCollection></SubElements><AdditionalData function="false" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="NOT" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="AND" /></Element></Item><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="IsNULL"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="{pb:Project}.{b:CareStartEnd}.careEnd" displayName="-Karty pacientů.+Přijetí/propuštění z péče.Datum konce" type="3" /></Element></Item></ElementCollection></SubElements><AdditionalData function="false" /></Element></Item><Item><Element type="Comparison"><SubElements><ElementCollection><Item><Element type="DynamicElement"><AdditionalData elementType="Now" /></Element></Item><Item><Element type="ColumnName"><AdditionalData columnName="{pb:Project}.{b:CareStartEnd}.careEnd" displayName="-Karty pacientů.+Přijetí/propuštění z péče.Datum konce" type="3" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="Less" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="OR" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="AND" /></Element></Item><Item><Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="Comparison"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="{pb:Project}.{b:CareStartEnd}.careType" displayName="-Karty pacientů.+Přijetí/propuštění z péče.Typ data" type="5" /></Element></Item><Item><Element type="EnumerationValue"><AdditionalData valueID="2461" valueOrder="0" enumRef="cd_careTypeE" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="Equal" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="NOT" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="AND" /></Element>');
                store.load();
            }
        });
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        this.getApplication().fireEvent("pacientSelected", record.get('ID'), record.get('pacientId'), record.get('Name'));

    },

    onCareRoleSelected: function() {
        this.getApplication().redirectTo("private/contacts");
    },

    onClientsView: function() {
        this.getApplication().redirectTo("private/contacts");
    },

    main: function() {
        this.getMainContainer().setActiveItem(this.getClientsView());
        this.onSearchButtonTap();
    },

    init: function(application) {

        application.on([
        { event: 'careRoleSelected', fn: this.onCareRoleSelected, scope: this },
        { event: 'clientsView', fn: this.onClientsView, scope: this }
        ]);
    }

});