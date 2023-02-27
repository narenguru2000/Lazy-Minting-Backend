import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetAllnftResposne {
  @ApiProperty()
  tokenId: number;

  @ApiProperty()
  uri: string;

  @ApiProperty()
  minPrice: number;
}

export class storeNftVoucher extends GetAllnftResposne {
  @ApiProperty()
  signature: string;
}

export class getUserNftReq {
  @ApiProperty({ example: 1 })
  @Type(() => Number)
  tokenId: number;
}
