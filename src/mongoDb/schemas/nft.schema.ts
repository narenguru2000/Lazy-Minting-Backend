import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type nftDocument = HydratedDocument<nft>;

@Schema()
export class nft {
  @Prop({ required: true, unique: true })
  tokenId: number;

  @Prop({ required: true })
  uri: string;

  @Prop({ required: true })
  minPrice: number;

  @Prop({ required: true })
  signature: string;
}

export const nftSchema = SchemaFactory.createForClass(nft);
