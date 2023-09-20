import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { GasStation } from "src/gas_station/Models/gasStation.model";


interface GasStationBranchCreationAttr{
    gas_stationId: number;
    branch_name: string;
    address: string;
    location: string;
    phoneNumber: string;
}

@Table({tableName: 'gas_station_branch'})

export class GasStationBranch extends Model<GasStationBranch, GasStationBranchCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @ForeignKey(()=> GasStation)
    @Column({
        type: DataType.INTEGER,
    })
    gas_stationId: number;

    @BelongsTo(()=> GasStation)
    gasStations: GasStation[];

    @Column({
        type: DataType.STRING,
    })
    branch_name: string;


    @Column({
        type: DataType.STRING,
    })
    address: string

    @Column({
        type: DataType.STRING,
    })
    location: string

    @Column({
        type: DataType.STRING,
    })
    phoneNumber: string

    

}