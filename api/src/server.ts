import app from './app/app';
import { Global } from './common/types/global';
declare var global:Global;
require('dotenv').config({path: global.envPath});
const PORT:number = Number(process.env.PORT) || 3000;
app.listen(PORT);


// yeeeeeet!