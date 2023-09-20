import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { CreateGasStationDto } from './dto/createGasStation.dto';
import { GasStation } from './Models/gasStation.model';
import { UpdateGasStationDto } from './dto/updateGasStation.dto';

@Controller('gas_station')
export class GasStationController {
    constructor(private readonly gasStationService:GasStationService){}

    @Post("gas")
    async createGasStation(@Body() createGasStationDto:CreateGasStationDto): Promise<GasStation>{
        return this.gasStationService.createGasStation(createGasStationDto)
    }

    @Get("all")
    async findAllGasStation(): Promise<GasStation[]>{
        return this.gasStationService.findAllGasStation();
    }

    @Get("one/:id")
    async findOneGasStation(@Param("id") id: string): Promise<GasStation>{
        return this.gasStationService.findById(id)
    }

    @Put("update/:id")
    async updateGasStation(@Param("id") id: string, @Body() updateGasStationDto: UpdateGasStationDto){
        return this.gasStationService.updateById(+id, updateGasStationDto)
    }

    @Delete("delete/:id")
    async deleteGasStation(@Param("id") id: string): Promise<number> {
        return this.gasStationService.deleteById(+id)
    }
}
