import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type nftDocument = HydratedDocument<nft>;

@Schema()
export class nft {
  @Prop()
  tokenId: string;

  @Prop()
  uri: number;

  @Prop()
  minPrice: string;

  @Prop()
  signature: string;
}

export const nftSchema = SchemaFactory.createForClass(nft);
