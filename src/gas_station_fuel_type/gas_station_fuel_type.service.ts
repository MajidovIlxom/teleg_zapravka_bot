import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasSFT } from './Models/gsfueltype.models';
import { CreateFuelType } from './dto/createGSFT.dto';
import { UpdateFuelType } from './dto/updateGSFT.dto';

@Injectable()
export class GasStationFuelTypeService {
    constructor(@InjectModel(GasSFT) private gasSFTRepo:typeof GasSFT){}

    async createGasStationFuelType(createGasStationDto: CreateFuelType): Promise<GasSFT>{
        const gasFt = await this.gasSFTRepo.create(createGasStationDto)
        return gasFt
    }

    async findAllGasFT(): Promise<GasSFT[]>{
        const gasFt = await this.gasSFTRepo.findAll({
            include: {all: true}
        })
        return gasFt
    }

    async findOneGasFT(id: number): Promise<GasSFT>{
        const gasFt = await this.gasSFTRepo.findByPk(+id)
        return gasFt
    }

    async updateGSFT(id: number, updateGasFT: UpdateFuelType): Promise<GasSFT>{
        const gasFt = await this.gasSFTRepo.update(updateGasFT, {where: {id},returning: true})
        return gasFt[1][0]
    }

    async deleteGSFT(id: number): Promise<number>{
        const gasFt = await this.gasSFTRepo.destroy({where: {id}})
        return gasFt
    }
}