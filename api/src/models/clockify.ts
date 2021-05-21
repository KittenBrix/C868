import { Global } from "../common/types/global";
import * as Koa from 'koa';

declare var global: Global;

import { ClockifyService } from '../services/clockify';
import ResponseBuilder, { ResponseHandler } from "../services/response-builder";
import {ResponseBuilderData} from "../common/types/response_builder";

export class Clockify{
    static async getRecords(ctx: Koa.Context){
        // assuming they used get or post/put
        let res : ResponseBuilderData<any>  = ResponseHandler(ctx, ResponseBuilder(null,"Could not get records",true));
        try{
            if (ctx.method.includes("GET")){
                res = await ClockifyService.getRecords(ctx.request.query);
            } else if (ctx.method.includes("POST") || ctx.method.includes("PUT")){
                res = await ClockifyService.getRecords(ctx.request.body);
            }
        } catch (err) {
            res.data = err;
        }
        ctx.body = ResponseHandler(ctx, res);
    }

    static async renewRecords(ctx: Koa.Context){
        let res : ResponseBuilderData<any>  = ResponseHandler(ctx, ResponseBuilder(null,"Could not renew records",true));
        try {
            if (ctx.method.includes("GET")){
                res = await ClockifyService.renewRecords(ctx.request.query);
            } else if (ctx.method.includes("POST") || ctx.method.includes("PUT")){
                res = await ClockifyService.renewRecords(ctx.request.body);
            }
        }catch (err){
            res.data = err;
        }
        ctx.body = ResponseHandler(ctx, res);
    }
}