import { Module } from "@nestjs/common";
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({


  imports: [

        MongooseModule.forRoot('mongodb+srv://admin:qwerty1234@cluster0.rlwgr.mongodb.net/music-platform?retryWrites=true&w=majority'),
        FileModule,
        TrackModule, 
        AlbumModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
    ]
})
export class AppModule {

}