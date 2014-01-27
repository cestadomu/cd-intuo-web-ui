/*
 * File: app/store/DoctorCareStore.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
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

Ext.define('CestaDomu.store.DoctorCareStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CestaDomu.model.DoctorCare',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Xml',
        'Ext.data.writer.Xml'
    ],

    config: {
        model: 'CestaDomu.model.DoctorCare',
        remoteFilter: true,
        remoteGroup: true,
        remoteSort: true,
        storeId: 'DoctorCareStore',
        proxy: {
            type: 'intuo',
            api: {
                read: {
                    service: CestaDomu.controller.GetBindingViewX,
                    templates: {
                        
                    }
                },
                mappingType: 'xml',
                mapping: {
                    ID: 'c0',
                    medicalReportNr: 'c1',
                    medicalReporttype: 'c2',
                    startDate: 'c3',
                    durationtime: 'c4',
                    Epikriza: 'c5',
                    doctor: 'c6'
                }
            },
            extraParams: {
                viewId: 1751
            },
            url: 'xxx',
            reader: {
                type: 'intuo',
                rootProperty: 'DocumentElement',
                record: 'WEB_x0020_lékařské_x0020_zprávy'
            },
            writer: {
                type: 'intuo'
            }
        }
    }
});