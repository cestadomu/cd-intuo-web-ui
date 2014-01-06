require.config({
    paths: {
        underscore: 'resources/require/underscore/underscore',
        JSZip: 'resources/require/jszip/jszip'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'JSZip': {
            exports: 'JSZip'
        }
    }
});