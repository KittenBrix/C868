export interface Global {
    headers: any;
    getSQLiteDB: any; //method to obtain an individual connection
    clockifyDB: { //an individual db connection to the clockify db
      connection: any;
      query: (query: string, dataObject?: Array<any> | object) => any;
    };
    discordDB: { //an individual db connection to the discord db
      connection: any;
      query: (query: string, dataObject?: Array<any> | object) => any;
    };
    studentDB: { //an individual db connection to the student db
      connection: any;
      query: (query: string, dataObject?: Array<any> | object) => any;
    };
    discordBot: any;
    envPath: string;  //the filepath to the environment file to use.
  }