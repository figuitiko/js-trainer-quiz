class Environment {
    public static get isDevelopment(): boolean {
        return process.env.NODE_ENV === "development";
    }
    public static get isProduction(): boolean {
        return process.env.NODE_ENV === "production";
    }
    public static get isTest(): boolean {
        return process.env.NODE_ENV === "test";
    }
    constructor() {
        this.load();      
    }
    private load(): void{
        const dotenv = require("dotenv");
        dotenv.config();
    }
    
    getPort(): number {
        return Number(process.env.PORT);
    }
    getDatabaseUrl(): string {
        return String(process.env.DATABASE_URL+'/'+ process.env.DATABASE_NAME);
    }
} 

export default new Environment();