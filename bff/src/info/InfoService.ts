export class InfoService {
    private static VERSION = "0.0.1";
    
    private static INSTANCE = new InfoService();

    public static getInstance() {
        return InfoService.INSTANCE;
    }

    public getVersion() {
        return InfoService.VERSION;
    }

}