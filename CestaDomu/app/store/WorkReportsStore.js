/*
 * File: app/store/WorkReportsStore.js
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

Ext.define('CestaDomu.store.WorkReportsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CestaDomu.model.WorkReport',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Xml',
        'Ext.data.writer.Xml'
    ],

    config: {
        model: 'CestaDomu.model.WorkReport',
        remoteFilter: true,
        remoteGroup: true,
        remoteSort: true,
        storeId: 'WorkReportsStore',
        proxy: {
            type: 'intuo',
            api: {
                read: {
                    service: CestaDomu.controller.GetBindingViewX,
                    templates: {
                        filterXml: new Ext.XTemplate('<Element type="LogicalOperator"><SubElements><ElementCollection><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="Comparison"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="To.(Activity).activitydate" displayName="Konec vazby.Aktivity.Datum" type="3" /></Element></Item><Item><Element type="Constant"><AdditionalData><anyType xmlns:q1="http://www.w3.org/2001/XMLSchema" d15p1:type="q1:dateTime" xmlns:d15p1="http://www.w3.org/2001/XMLSchema-instance">{filters.dateTo}</anyType></AdditionalData></Element></Item></ElementCollection></SubElements><AdditionalData Operator="LessOrEqual" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item><Item><Element type="Parenthesis"><SubElements><ElementCollection><Item><Element type="Comparison"><SubElements><ElementCollection><Item><Element type="ColumnName"><AdditionalData columnName="To.(Activity).activitydate" displayName="Konec vazby.Aktivity.Datum" type="3" /></Element></Item><Item><Element type="Constant"><AdditionalData><anyType xmlns:q1="http://www.w3.org/2001/XMLSchema" d15p1:type="q1:dateTime" xmlns:d15p1="http://www.w3.org/2001/XMLSchema-instance">{filters.dateFrom}</anyType></AdditionalData></Element></Item></ElementCollection></SubElements><AdditionalData Operator="GreaterOrEqual" /></Element></Item></ElementCollection></SubElements><AdditionalData /></Element></Item></ElementCollection></SubElements><AdditionalData Operator="AND" /></Element>')
                    }
                },
                mappingType: 'xml',
                mapping: {
                    TypeClass: 'c1',
                    start: 'c2',
                    durationtime: 'c3',
                    transportDuration: 'c4',
                    AppointmentStart: 'c5',
                    AppointmentEnd: 'c6',
                    ServiceType: 'c7',
                    wayOfWorking: 'c8',
                    DaysOfHoliday: 'c9',
                    TypeOfAbsence: 'c10',
                    documentationWayOfWorking: 'c11'
                }
            },
            extraParams: {
                viewId: 1691// Org. struktura->Zaměstnanci->Vazba Aktivity
            },
            url: 'xxx',
            reader: {
                type: 'intuo',
                rootProperty: 'DocumentElement',
                record: 'WEB_x0020_všechny_x0020_aktivity_x0020_zaměstnance'
            },
            writer: {
                type: 'intuo'
            }
        }
    }
});