import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { CreateGSBDto } from './dto/creategsb.dto';
import { GasStationBranch } from './Models/gas_station_branch.models';
import { UpdateGSBDto } from './dto/updategsb';

@Controller('gas_station_branch')
export class GasStationBranchController {
    constructor(private readonly gasStationBranchService: GasStationBranchService){}
    
    @Post("create")
    async createGSBranch(@Body() createGSBDto: CreateGSBDto): Promise<GasStationBranch>{
        return this.gasStationBranchService.createGasSB(createGSBDto)
    }

    @Get("all")
    async getAll(): Promise<GasStationBranch[]>{
        return this.gasStationBranchService.findAllGSB()
    }

    @Get("one/:id")
    async getOne(@Param("id") id: number): Promise<GasStationBranch>{
        return this.gasStationBranchService.findOneGSB(+id)
    }

    @Put("update/:id")
    async update(@Param("id") id: number, @Body() updateGSBDto: UpdateGSBDto): Promise<GasStationBranch>{
        return this.gasStationBranchService.updateGSB(+id, updateGSBDto)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id: number): Promise<number>{
        return this.gasStationBranchService.deleteGSB(+id)
    }
}
