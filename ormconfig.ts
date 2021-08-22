const env = process.env.NODE_ENV;

module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "nest",
  synchronize: true,
  logging: true,
  entities: [`${env == "dev" ? "src" : "dist"}/entity/*{.ts,.js}`],
};
