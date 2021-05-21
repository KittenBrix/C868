import { Global } from "./types/global";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CLOCKIFY TABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
declare var global: Global;
require('dotenv').config({path:global.envPath});

export const CLOCKIFYDB = {
    filepath: process.env.DB_FILE_CLOCKIFY,
    timeEntry: {    //table for time entries retrieved from clockify
        table:"time_entries",
        id:"id",
        description:"description",
        taskId: "taskId",
        projectId: "projectId",
        userId:"userId",
        start: "start",
        end: "end",
        duration: "duration",
        workspaceId:"workspaceId",
    },
    userEntry: {    //table for users retrieved from clockify
        id: "id",
        email: "email",
        name: "username",
    },
    userGroupEntry:{ //users matched to groups
        id: "id",
        userId:"userId",
        groupId:"groupId",
    },
    groupEntry: {   //groups in the given workspace
        id:"id",
        name:"name",
        workspaceId:"workspaceId",
    },
    workspaceEntry: {   //workspaces accounted for. (default should just be the BVT one)
        id:"id",
        name:"name",
    },
    projectEntry: {
        id: "id",
        name:"name",
        workspaceId:"workspaceId",
        archived:"archived",
    },
    taskEntry:{
        id:"id",
        name:"name",
        projectId:"projectId",
        status:"status",
    }

};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DISCORD TABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const DISCORDDB = {
    filepath: process.env.DB_FILE_DISCORD,
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STUDENT TABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const STUDENTDB = {
    filepath: process.env.DB_FILE_STUDENT,
}