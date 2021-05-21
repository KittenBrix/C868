export interface ClockifyRequest {
    type?: "all" | "user" | "group";
    id?: number;
    startDate?: Date;
    endDate?: Date;
}