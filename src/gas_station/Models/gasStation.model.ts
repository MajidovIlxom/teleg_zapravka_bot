import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { GasStationBranch } from "src/gas_station_branch/Models/gas_station_branch.models";


interface GasStationCreationAttr{
    main_gas_station_name: string;
}

@Table({tableName: 'gas_station'})

export class GasStation extends Model<GasStation, GasStationCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    main_gas_station_name: string;

    @HasMany(()=> GasStationBranch)
    gasStationBranchs: GasStationBranch[];
}