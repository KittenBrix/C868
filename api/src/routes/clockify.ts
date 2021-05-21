import * as Koa from 'koa';
import * as Router from 'koa-router';
import { Clockify } from '../models/clockify';


const router: Router = new Router();
router.prefix('/clockify');
router.get('/', Clockify.getRecords);
router.put('/', Clockify.getRecords);
router.post('/',Clockify.getRecords);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Request Renewal ~~~~~~~~~~~~
router.get('/',Clockify.renewRecords);
router.put('/',Clockify.renewRecords);
router.post('/',Clockify.renewRecords);
export default router.routes();