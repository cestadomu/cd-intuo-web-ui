Ext.define('Lib.IntuoField', { 
    alias: 'data.intuo', 
    extend: 'Ext.data.Field',
    getMapping: function() {
        var field = this;
        var mapping = this.callParent(arguments);
        return function(source, reader) {
            var x=1;
        };
    }
});