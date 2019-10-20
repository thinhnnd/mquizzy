const CONFIG = {
    URI: "mongodb://localhost:27017/mquizzy",
    ORMCONFIG: {
        "type": "postgresql",
        "host": "localhost",
        "database": "mquizzy",
        "entities": [
            "build-backend/**/**.entity{.ts,.js}"
        ],
        "synchronize": true
    }
};
export default CONFIG;