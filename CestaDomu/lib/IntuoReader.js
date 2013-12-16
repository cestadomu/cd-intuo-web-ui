Ext.define('Lib.IntuoReader', { 
    alias: 'reader.intuo', 
    extend: 'Ext.data.reader.Xml',
    requires: ['CestaDomu.controller.Intuo'],
    setProxyApi: function(value) {
        this.proxyApi = value;
    },
    getProxyApi: function() {
        return this.proxyApi;
    },
    readFieldValue: function(field, source) {
        if (field) {
            var mapping = field.getName();
            if (this.getProxyApi().mapping) {
                mapping = this.getProxyApi().mapping[field.getName()] || field.getName();
            }
            if (this.getProxyApi().mappingType === 'xml') {
                var node = Ext.DomQuery.selectNode(mapping, source);
                if (node) {
                    return node.textContent;
                }
            } else {
                var valueNode;
                Ext.DomQuery.select('ArrayOfAnyType', source).forEach(function(element) {
                    if (element.firstElementChild && element.firstElementChild.textContent == mapping) {
                        valueNode = element.lastElementChild;
                    }
                });
                if (valueNode) {
                    return valueNode.textContent;
                }
            }
        }
        return undefined;
    },
    createFieldAccessExpression: function(field, fieldVarName, dataName) {
        return 'me.readFieldValue( '+ fieldVarName +', '+ dataName +')';
/*
        var selector = field.getMapping() || field.getName(),
            result;
        if (typeof selector === 'function') {
            result = fieldVarName + '.getMapping()(' + dataName + ', this)';
        } else {
            selector = selector.split('@');

            if (selector.length === 2 && selector[0]) {
                result = 'me.getNodeValue(Ext.DomQuery.selectNode("@' + selector[1] + '", Ext.DomQuery.selectNode("' + selector[0] + '", ' + dataName + ')))';
            } else if (selector.length === 2) {
                result = 'me.getNodeValue(Ext.DomQuery.selectNode("@' + selector[1] + '", ' + dataName + '))';
            } else if (selector.length === 1) {
                result = 'me.getNodeValue(Ext.DomQuery.selectNode("' + selector[0] + '", ' + dataName + '))';
            } else {
                throw "Unsupported query - too many queries for attributes in " + selector.join('@');
            }
        }
        return result;
*/
    }
});