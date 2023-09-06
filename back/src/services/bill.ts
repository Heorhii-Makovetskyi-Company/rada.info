import { injectable, inject, delay } from "tsyringe";
import { BillRepository } from "@/repositories/bill";
import type { VeryShortBill, Bill } from "@shared/bill"

@injectable()
export class BillService {
  constructor(
    @inject(delay(() => BillRepository)) private billRepository: BillRepository
  ) { }

  async findBills({take, skip}: { take: number, skip: number }): Promise<VeryShortBill[]> {
    const bills = await this.billRepository.findBills({take, skip});
    const veryShortBills: VeryShortBill[] = bills.map((bill) => ({
      content:  bill.veryShortContent,
      title: bill.veryShortTitle,
      lastStep: bill.steps[0],
      originId: bill.originId,
      initiators: bill.initiators.slice(0, 2),
      likesCount: bill.likesCount,
      dislikesCount: bill.dislikesCount
    }))
    return veryShortBills
  }

  async findBill(originId: string): Promise<Bill | undefined> {
    const bill = await this.billRepository.findBill(originId)

    if (!bill) {
      return undefined
    }

    const { main_committee: mainCommittee, other_committees: otherCommittees, ...rest } = bill

    return {
      mainCommittee,
      otherCommittees,
      ...rest
    }
  }
}
