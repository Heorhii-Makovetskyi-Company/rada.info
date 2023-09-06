import { container } from "tsyringe";
import { BillService } from "@/services/bill";
import type { Request, Response } from "express"

export class BillController {
  private billService: BillService;

  constructor() {
    this.billService = container.resolve(BillService);
  }

  async findBills(res: Response, req: Request) {
    const limit = Number(req.query.limit) || 20;
    const page = Number(req.query.page) || 1;

    const skip = limit * (page - 1);

    const bills = await this.billService.findBills({skip, take: limit});
    res.json(bills);
  }

  async findBill(res: Response, req: Request) {
    const originId = String(req.params.originID)
    console.log('originId: ', originId)

    if (!originId) {
      // TODO: Check if this is correct
      return res.send(500)
    }

    const bill = await this.billService.findBill(originId)

    if (!bill) {
      // TODO: Check if this code is right
      return res.send(500)
    }

    return res.json(bill)
  }
}
