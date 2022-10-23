import { log, time, server, emotji } from './console.js';
log.info('Hello World!');
server.info('server', 'Hello World!'); 
time.time();
emotji.bugmsg();
time.time(
    emotji.bugmsg('Hello World!'),
    emotji.flower()

);