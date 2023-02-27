import { Type } from '@nestjs/class-transformer';

export class GetAllnftResposne {
  tokenId: number;
  uri: string;
  minPrice: number;
}

export class storeNftVoucher extends GetAllnftResposne {
  signature: string;
}

export class getUserNftReq {
  @Type(() => Number)
  tokenId: number;
}
