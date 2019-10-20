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
    },
    SECRET_KEY:"Sup3r_s3cr3t_n0d3JS_k3Y",
};
export default CONFIG;