import { ConfigService } from "@nestjs/config";
import { MongooseModuleFactoryOptions } from "@nestjs/mongoose";
export declare const getMongoConfig: (configService: ConfigService) => Promise<MongooseModuleFactoryOptions>;
