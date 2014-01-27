/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
    paths: {
        Ext: 'touch/src',
        Lib: 'lib',
        CestaDomu: 'app'
    }
});


Ext.application({

    requires: [
        'Ext.Loader',
        'Lib.IntuoProxy',
        'Lib.IntuoWriter',
        'Lib.IntuoReader',
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.field.Password',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.carousel.Carousel',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.XTemplate',
        'CestaDomu.controller.Login',
        'CestaDomu.controller.GetViewX',
        'CestaDomu.controller.GetObjectInfo',
        'CestaDomu.controller.GetBindingViewX',
        'CestaDomu.controller.GetEnumerationDataByReference',
        'CestaDomu.controller.GetEnumerationActiveDataByReference',
        'CestaDomu.controller.CreateObject'
    ],
    models: [
        'Contact',
        'Employee',
        'TimeInterval',
        'WorkReport',
        'TimeFund',
        'Pacient',
        'NurseCare',
        'Drug',
        'TimeNumber',
        'Enumeration',
        'RawWorkReport',
        'RawDocReport',
        'DoctorCare',
        'ConsultationCare'
    ],
    stores: [
        'ContactsStore',
        'EmployeesStore',
        'WorkReportIntervals',
        'WorkReportsStore',
        'TimeFundStore',
        'NurseCareStore',
        'DrugStore',
        'Hours',
        'Minutes',
        'WayOfWorking',
        'FormWork',
        'ServiceType',
        'DoctorCareStore',
        'ConsultationCareStore'
    ],
    views: [
        'LoginView',
        'MainContainer',
        'ClientsView',
        'RoleSelectView',
        'ClientDetailView',
        'WorkReportsView',
        'NewNurseCareView'
    ],
    controllers: [
        'LoginController',
        'RoleSelectController',
        'DefaultController',
        'ClientsController',
        'ClientDetailController',
        'WorkReportsController',
        'NewNurseCareController'
    ],
    name: 'CestaDomu',

    launch: function() {
        if((typeof(Storage)==="undefined")) {
            Ext.Msg.alert('Nepodporovaný prohlížeč', 'Váš prohlížeč nepodporuje technologie (local storage) vyžadované touto aplikací, prosím použijte jiný prohlížeč.');
        }

        Ext.Ajax.addListener('requestcomplete', function (conn, options, eOpts) {
            if (options.request.options.url.indexOf(CestaDomu.controller.Intuo.commonServiceUrlPart) === 0) {
                CestaDomu.controller.Login.saveTokenTime(new Date().getTime());
            }
        });
        Ext.create('CestaDomu.view.MainContainer', {fullscreen: true});
    }

});
