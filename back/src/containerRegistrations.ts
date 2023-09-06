import "reflect-metadata";

import { BillRepository } from "@/repositories/bill";
import { container } from "tsyringe";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({ errorFormat: 'minimal' })

container.register<PrismaClient>('PrismaClient', { useValue: prisma });
container.register("BillRepository", { useClass: BillRepository });
