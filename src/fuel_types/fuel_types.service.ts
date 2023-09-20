import { Injectable } from '@nestjs/common';
import { FuelTypes } from './Models/fuel_types.models';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFuelType } from './dto/createFuelTypes.dto';
import { UpdateFuelType } from './dto/updateFuelTypes.dto';

@Injectable()
export class FuelTypesService {
    constructor(@InjectModel(FuelTypes) private gasStationRepo: typeof FuelTypes){}

    async createGasStation(createFuelType: CreateFuelType): Promise<FuelTypes>{
        const gas = await this.gasStationRepo.create(createFuelType)
        return gas
    }

    async findAllGasStation(): Promise<FuelTypes[]>{
        const gas = await this.gasStationRepo.findAll({
            include: {all: true} 
        })
        return gas
    }

    async findById(id: string): Promise<FuelTypes>{
        const gas = await this.gasStationRepo.findByPk(id)
        return gas
    }

    async updateById(id: number, updateFuelType: UpdateFuelType): Promise<FuelTypes>{
        const gas = await this.gasStationRepo.update(updateFuelType, {where: {id}, returning: true})
        return gas[1][0]
    }

    async deleteById(id: number): Promise<number>{
        const gas = await this.gasStationRepo.destroy({where: {id}})
        return gas
    }
}
