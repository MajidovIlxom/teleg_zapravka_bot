import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStation } from './Models/gasStation.model';
import { CreateGasStationDto } from './dto/createGasStation.dto';
import { UpdateGasStationDto } from './dto/updateGasStation.dto';

@Injectable()
export class GasStationService {
    constructor(@InjectModel(GasStation) private gasStationRepo: typeof GasStation){}

    async createGasStation(createGasStationDto: CreateGasStationDto): Promise<GasStation>{
        const gas = await this.gasStationRepo.create(createGasStationDto)
        return gas
    }

    async findAllGasStation(): Promise<GasStation[]>{
        const gas = await this.gasStationRepo.findAll({
            include: {all: true} 
        })
        return gas
    }

    async findById(id: string): Promise<GasStation>{
        const gas = await this.gasStationRepo.findByPk(id)
        return gas
    }

    async updateById(id: number, updateGasStationDto: UpdateGasStationDto): Promise<GasStation>{
        const gas = await this.gasStationRepo.update(updateGasStationDto, {where: {id}, returning: true})
        return gas[1][0]
    }

    async deleteById(id: number): Promise<number>{
        const gas = await this.gasStationRepo.destroy({where: {id}})
        return gas
    }
}
