import { Platform } from "react-native";
import { Account, Client } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_BUNDLE_ID } from '@env'

const config ={

};

const client = new Client()
.setEndpoint(APPWRITE_ENDPOINT)
.setProject(APPWRITE_PROJECT_ID)

switch(Platform.OS){
    // case 'android' : 
    //     client.setPlatform(APPWRITE_BUNDLE_ID) 
    //     break  
}

const account = new Account(client);
export { account, client, config, };