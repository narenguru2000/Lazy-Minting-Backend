import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { nft, nftSchema } from 'src/mongoDb/schemas/nft.schema';
import { NftController } from './nft.controller';
import { NftService } from './nft.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: nft.name, schema: nftSchema }])],
  providers: [NftService],
  controllers: [NftController],
})
export class NftModule {}
