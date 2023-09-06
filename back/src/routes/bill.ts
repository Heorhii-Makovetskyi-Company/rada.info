import { Router } from 'express';
import { BillController } from "@/controllers/bill";

const router = Router();
const billController = new BillController();

router.get('/bills', (res, req) => billController.findBills(req, res));
router.get('/bills/:originID', (res, req) => billController.findBill(req, res))

export default router;
