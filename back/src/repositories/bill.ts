import { PrismaClient } from '@prisma/client'
import { inject, injectable } from 'tsyringe';

@injectable()
export class BillRepository {
  constructor(
    @inject('PrismaClient') private prismaClient: PrismaClient
  ) { }

  async findBills({take, skip}: { take: number, skip: number }) {
    this.prismaClient.$connect()
    const bills = await this.prismaClient.bill.findMany({ 
      take, 
      skip,
      select: { 
        veryShortContent: true,
        veryShortTitle: true,
        steps: {
          select: {
            name: true,
            date: true,
          },
          orderBy: {
            date: 'asc'
          },
          take: 1
        },
        originId: true,
        initiators: true,
        likesCount: true,
        dislikesCount: true
      }
    });
    this.prismaClient.$disconnect()
    return bills
  }

  async findBill(originId: string) {
    this.prismaClient.$connect()
    const bills = await this.prismaClient.bill.findFirst({ 
      where: {
        originId
      },
      select: {
        content: true,
        shortContent: true,

        title: true,
        shortTitle: true,

        steps: true,
        originId: true,
        initiators: true,
        likesCount: true,
        dislikesCount: true,      
        registration: true,
        session: true,
        rubric: true,
        main_committee: true,
        other_committees: true,
        docs: true
      }
    });
    this.prismaClient.$disconnect()
    return bills
  }
}
