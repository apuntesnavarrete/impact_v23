import { IsEmpty } from "class-validator";
import { Participants } from "src/participants/participants.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Teams{
  //creara la llave primaria 
    @PrimaryGeneratedColumn()
    id: number;
  //creara la columna para los nombres de los equipos  
    @Column({
        length: 255,
      })
      @IsEmpty()
      name: string;

  //creara la columna para el fundador del equipo  
// con una relacion que viene de la tabla participantes
      @ManyToOne(() => Participants, participants => participants.id)
      participants : Participants
  //creara la columna para la dirreccion del logo del equipo 

      @Column({
        length: 100,
      })
      @IsEmpty()
      logo: string;

}
//cambiar nombre de columna a founder