/*
 * File: app/model/Pacient.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('CestaDomu.model.Pacient', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Xml',
        'Ext.data.writer.Xml'
    ],

    config: {
        idProperty: 'ID',
        fields: [
            {
                name: 'ID',
                type: 'auto'
            },
            {
                name: 'Name',
                type: 'string'
            },
            {
                name: 'note',
                type: 'string'
            },
            {
                name: 'street',
                type: 'string'
            },
            {
                name: 'city',
                type: 'string'
            },
            {
                name: 'contactPerson',
                type: 'string'
            },
            {
                name: 'phonePrefix',
                type: 'string'
            },
            {
                name: 'phoneNumber',
                type: 'string'
            },
            {
                name: 'mobilePrefix',
                type: 'string'
            },
            {
                name: 'mobileNumber',
                type: 'string'
            }
        ],
        proxy: {
            type: 'intuo',
            api: {
                read: {
                    service: CestaDomu.controller.GetBindingViewX,
                    templates: {
                        filterXml: new Ext.XTemplate('<Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="To.(Company).{["{"]}b:Address{["}"]}.ActualAddress" displayName="Konec vazby.Kontakty.+Adresy.Aktuální bydliště" type="4" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="Comparison"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="To.(Company).{["{"]}pb:Company{["}"]}.{["{"]}ba:cdRole{["}"]}" displayName="Role" type="5" /></Element></Item><Item><Element type="EnumerationValue"><AdditionalData valueID="1944" valueOrder="0" enumRef="155" /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="Equal" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="AND" /></Element>')
                    }
                },
                mappingType: 'xml',
                mapping: {
                    ID: 'c2',
                    Name: 'c3',
                    note: 'c4',
                    street: 'c5',
                    city: 'c6',
                    contactPerson: 'c7',
                    phonePrefix: 'c8',
                    phoneNumber: 'c9',
                    mobilePrefix: 'c10',
                    mobileNumber: 'c11'
                }
            },
            extraParams: {
                viewId: 1719
            },
            url: 'xxx',
            reader: {
                type: 'intuo',
                rootProperty: 'DocumentElement',
                record: 'WEB_x0020_pacient'
            },
            writer: {
                type: 'intuo'
            }
        }
    }
});