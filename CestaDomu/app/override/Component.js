Ext.define('CestaDomu.override.Component', {
    override: 'Ext.Component',
    setRecordRecursive: function(record){
        if(typeof this.setRecord == 'function'){
            this.setRecord(record);
        }
        if(typeof this.getItems == 'function'){
            this.getItems().each(function(item){
                this.setRecordRecursive.apply(item,[record]);
            });
        }
    }
});