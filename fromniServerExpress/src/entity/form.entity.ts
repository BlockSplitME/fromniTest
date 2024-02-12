import { Entity, Column, PrimaryColumn } from "typeorm"; 

@Entity()
export class Form {     
    @PrimaryColumn()
    id: number

    @Column()
    name: string     
    
    @Column({     type: "json",     array: true})
    channels: Channel[]
}

@Entity()
export class Channel {     
    @PrimaryColumn()
    name: string   
    
    @Column()
    checked: boolean

    @Column()
    text: string

    @Column()
    isKeyboardInline: boolean

    @Column({     type: "json",     array: true})
    tips: string[]

    @Column({     type: "json",     array: true})
    urls: Url[]
    
    @Column()
    color: string
}

@Entity()
export class Url {
    @PrimaryColumn()
    tip: string

    @Column()
    url: string
}
