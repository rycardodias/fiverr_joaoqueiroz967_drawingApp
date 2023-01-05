var Service = require('node-windows').Service;
// Create a new service object
var svc = new Service({
    name: 'Drawing App',
    description: 'Drawing App auto-run.',
    script: 'C:/Github/fiverr_joaoqueiroz967_drawingApp/app.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.

svc.on('install', function () {
    svc.start();
});

svc.install();