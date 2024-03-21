// const host =  process.env.DB_HOST || 'localhost';

const username = encodeURIComponent("gauriwalke99");
const password = encodeURIComponent("Gauri123");

const config = {
  server: {
    port: 5000
  },
  database: {
    //   make username and psd urlencoded
    url: `mongodb+srv://${username}:${password}@cluster-1.fkgz1r3.mongodb.net/MedicalApp?retryWrites=true&w=majority`,
    properties: {
        useNewUrlParser: true, useUnifiedTopology: true
    }
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  },
  jwt:{
    SECRET_KEY : "jwt-secret-key"
  },
  storage:{
    keyFilename: `C:/Users/Gauri/FULL_STACK/credentials_hw.json`,
  }
  
};

export default config;