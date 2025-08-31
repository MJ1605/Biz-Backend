import { Client, Account } from "appwrite";


export const client = new Client();

client
    .setEndpoint('https://syd.cloud.appwrite.io/v1')
    .setProject('68a193ae002b31fc7e2c'); 

export const account = new Account(client);
export { ID } from 'appwrite';