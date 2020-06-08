import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{
    
    Cards: Card[] = [];

    ngOnInit(): void {
       for(let i = 0; i < 10; i++) {
           this.addCard();
       }
    }

    cardID = 0 ;
    addCard(name: string = 'Name')
    {
       this.Cards.push(new Card(name, Boolean(Math.round(Math.random())), this.cardID++));
       console.log(this.Cards);
    }

    deleteCard(idButton: number){
       console.log("Номер карты: " + idButton);
       
        for(let i=0; i < this.Cards.length; i++) {
           if(this.Cards[i].id === idButton) {
               this.Cards.splice(i, 1);
            }
        }
    }






} 