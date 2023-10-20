import { ConfigService } from "@nestjs/config";
import { MongooseModuleFactoryOptions } from "@nestjs/mongoose";

export const getMongoConfig =async (configService:ConfigService): Promise<MongooseModuleFactoryOptions>  => {
  
    return{
        uri: getMongoString(configService),
        ...getMongoOptions()
      
    }   
}
const getMongoString = (configService:ConfigService) => 
        'mongodb://' +
        configService.get('MONGO_LOGIN') +
        ':' +
        configService.get('MONGO_PASSWORD') +
        '@' +
        configService.get('MONGO_HOST') +
        ':' +
        configService.get('MONGOPORT') +
        '/' +
        configService.get('MONGO_AUTHDATABASE');


const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

