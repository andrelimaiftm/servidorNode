import {ICliente} from './ICliente';

export class Cliente{

    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    } 

    

    public getId():number{
        return this.id;
    }

    public setId(valor: number){
        this.id = valor;
    }

    public getNome():string{
        return this.nome;
    }

    public setNome(valor: string){
        this.nome = valor;
    }

    public getEmail():string{
        return this.email;
    }

    public setEmail(valor: string){
        this.email = valor;
    }

    montaCliente({id, nome, email}:ICliente){
        console.log(`Montano cliente com id: ${id}, nome: ${nome}, email: ${email} `);
    }

}

