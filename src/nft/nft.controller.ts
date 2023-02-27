import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { getUserNftReq, storeNftVoucher } from './dto';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {
  constructor(private nftService: NftService) {}

  @Get('user/:tokenId')
  getUserNfts(@Param() params: getUserNftReq) {
    return this.nftService.getUserNfts(params);
  }

  @Get()
  getAllNfts() {
    return this.nftService.getAllNfts();
  }

  @Post('create')
  create(@Body() dto: storeNftVoucher) {
    return this.nftService.storeVoucher(dto);
  }
}
