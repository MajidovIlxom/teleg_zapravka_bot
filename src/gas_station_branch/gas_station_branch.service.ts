import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStationBranch } from './Models/gas_station_branch.models';
import { CreateGasStationDto } from 'src/gas_station/dto/createGasStation.dto';
import { UpdateGSBDto } from './dto/updategsb';
import { CreateGSBDto } from './dto/creategsb.dto';

@Injectable()
export class GasStationBranchService {
    constructor(@InjectModel(GasStationBranch) private GasSBRepo: typeof GasStationBranch){}

    async createGasSB(createGasStationDto: CreateGSBDto): Promise<GasStationBranch>{
        const gasB =await this.GasSBRepo.create(createGasStationDto)
        return gasB
    }

    async findAllGSB(): Promise<GasStationBranch[]>{
        const gasB =await this.GasSBRepo.findAll({
            include: {all: true}
        })
        return gasB
    }

    async findOneGSB(id: number): Promise<GasStationBranch>{
        const gasB =await this.GasSBRepo.findByPk(+id)
        return gasB
    }

    async updateGSB(id: number, updateGasStationDto: UpdateGSBDto): Promise<GasStationBranch>{
        const gasB = await this.GasSBRepo.update(updateGasStationDto, {where: {id}, returning: true})
        return gasB[1][0]
    }

    async deleteGSB(id: number): Promise<number>{
        const gasB =await this.GasSBRepo.destroy({where: {id}})
        return gasB
    }
}
