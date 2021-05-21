import { Global } from "../common/types/global";
import ResponseBuilder from "./response-builder";
import { ResponseBuilderData } from "../common/types/response_builder";
import { ClockifyRequest } from "../common/types/clockify";


declare var global: Global;

export class ClockifyService {
    static async getRecords(args: ClockifyRequest): Promise<ResponseBuilderData<any[]>>{
        // use arguments as SQL parameters for these records
        console.log(args);
        const type = args.type || "all";
        const id = +(args.id);
        const {startDate, endDate} = args;
        if (!id && type != "all"){
            return ResponseBuilder(null,"Can not retrieve group data without id",true);            
        }
        return ResponseBuilder({hey:'hello!'},"successful data?",false,null);
    }
    static async renewRecords (args: ClockifyRequest): Promise<ResponseBuilderData<any[]>>{
        // use arguments to verify which record set to renew (all, just one user, just one cohort, just ones between two dates)
        return null;
    }
}