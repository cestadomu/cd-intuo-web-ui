/*
 * File: app/controller/Intuo.js
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

Ext.define('CestaDomu.controller.Intuo', {
    extend: 'Ext.Base',
    alias: 'controller.intuo',

    requires: [
        'Ext.XTemplate'
    ],
    singleton: true,

    config: {
    },

    constructor: function() {
        this.callParent(arguments);
        this.token = false;
        this.commonServiceUrlPart = 'https://intuo.cestadomu.cz/webservice/service3auth.asmx';
        //<debug>
        //this.commonServiceUrlPart = 'http://localhost:8080/';
        //</debug>
    }

});