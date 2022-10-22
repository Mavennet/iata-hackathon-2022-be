import { Injectable } from '@nestjs/common';

@Injectable()
export class PieceService {
  create(createPieceDto: any) {
    return 'This action adds a new piece';
  }

  findAll() {
    return `This action returns all piece`;
  }

  findOne(id: number) {
    return `This action returns a #${id} piece`;
  }

  update(id: number, updatePieceDto: any) {
    return `This action updates a #${id} piece`;
  }

  remove(id: number) {
    return `This action removes a #${id} piece`;
  }
}
