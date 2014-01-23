Ext.define('Lib.IntuoWriter', { 
    alias: 'writer.intuo', 
    extend: 'Ext.data.writer.Xml',
    requires: ['CestaDomu.controller.Login', 'CestaDomu.controller.Intuo'],
    writeRecords: function(request, data) {
        request.getHeaders()['Content-Type'] = 'text/xml; charset=UTF-8';
        var templateParams = {};

        templateParams.requestParams = request.getParams();

        templateParams.token = CestaDomu.controller.Login.getToken();
        templateParams.data = data;
        templateParams.filters = {};
        if (request.getOperation().getFilters()) {
            request.getOperation().getFilters().forEach(function (filter) {templateParams.filters[filter.getProperty()] = filter.getValue();});
        }

        var operationApi = this.getProxyApi()[request.getOperation().getAction()];
        if (operationApi.templates) {
            for (var template in operationApi.templates) {
                templateParams[template] = operationApi.templates[template].apply(templateParams);
            }
        }
        request.setXmlData(operationApi.service.template.apply(templateParams));
        request.setParams({});
        return request;
    },
    setProxyApi: function(value) {
        this.proxyApi = value;
    },
    getProxyApi: function() {
        return this.proxyApi;
    },
    writeDate: function(field, date) {
    	return date;
    }

});