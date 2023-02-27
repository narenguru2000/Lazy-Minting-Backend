import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nft, nftDocument } from 'src/mongoDb/schemas/nft.schema';
import { GetAllnftResposne, getUserNftReq, storeNftVoucher } from './dto';

@Injectable()
export class NftService {
  constructor(@InjectModel(nft.name) private nftModel: Model<nftDocument>) {}

  async getAllNfts(): Promise<GetAllnftResposne[]> {
    try {
      const data = await this.nftModel.find().exec();
      return data.map((obj) => ({
        tokenId: obj.tokenId,
        uri: obj.uri,
        minPrice: obj.minPrice,
      }));
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async storeVoucher(dto: storeNftVoucher): Promise<nftDocument> {
    try {
      const nftVoucher = this.nftModel.create(dto);
      return (await nftVoucher).save();
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async getUserNfts(dto: getUserNftReq): Promise<nftDocument[]> {
    try {
      const userNfts = await this.nftModel.find({ tokenId: dto.tokenId });
      return userNfts;
    } catch (error) {}
  }
}
