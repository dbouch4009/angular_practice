export class LoggingService {
    //service is just a normal TS class
    logStatusChange(status: string){
        console.log('A server status changed, using service, new status: ' + status);
    }
}