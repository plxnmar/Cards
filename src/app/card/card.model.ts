export class Card {
    id: number;
    status: boolean;
    name: string;
    color: string;

    constructor(name: string, status: boolean, id: number) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.color = status ? 'green' : 'red';
    }
}