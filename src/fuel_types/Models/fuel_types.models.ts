import { Column, DataType, Model, Table } from "sequelize-typescript";


interface FuelTypesCreationAttr{
    name: string;
}

@Table({tableName: 'fuel_types'})

export class FuelTypes extends Model<FuelTypes, FuelTypesCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @Column({
        type: DataType.STRING,
    })
    name: string;
}