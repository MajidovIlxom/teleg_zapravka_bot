import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { FuelTypes } from "src/fuel_types/Models/fuel_types.models";
import { GasStationBranch } from "src/gas_station_branch/Models/gas_station_branch.models";


interface GasSFTCreationAttr{
    gas_station_branchId: number;
    fuel_type_id: number;
    price: number;
    is_acteve: boolean;
}

@Table({tableName: 'gas_station_fuel_type'})

export class GasSFT extends Model<GasSFT, GasSFTCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @ForeignKey(()=> GasStationBranch)
    @Column({
        type: DataType.INTEGER,
    })
    gas_station_branchId: number;

    @BelongsTo(()=> GasStationBranch)
    gasStationBranchs: GasStationBranch[];


    @ForeignKey(()=> FuelTypes)
    @Column({
        type: DataType.INTEGER,
    })
    fuel_type_id: number;

    @BelongsTo(()=> FuelTypes)
    fuelTypes: FuelTypes[];

    @Column({
        type: DataType.INTEGER,
    })
    price: number;

    @Column({
        type: DataType.BOOLEAN,
    })
    is_acteve: boolean;

}