/*
 * Game rules
 *• kamen pobjeđuje škare
 *• škare pobjeđuju papir
 *• papir pobjeđuje kamen
 */

/**
 * @author Marko Golemovic
 * @since 14.09.2020
 * @version 1.0
 * @desription: Simple script which try to solves vinner of Stone,sizards, paper
 */
let player1;
let computer;
let posible_optione = ["scissors", "paprer", "stone"]

console.log("Plese enter Stone,paper,sizards");

//atribut objekta
player1.chosen_option = window.prompt("Player 1 stone,paper,scissors ");
alert("Your Choice is " + player1.chosen_option);

//random(0 do 3)
//0 skare
//1 pair
//2 kamen

computer.chosen_option = posible_option[ //rezultat random funkcije];


        if (player.chosen_option == "scissors") {
            if (computer.chosen_option == "stone") {
                player lose;
            }
            if (computer.chosen_option == "scissors") {
                nerjeseno
            }
            if (computer.chosen_option == "paper") {
                player win
            }
        } else if (player.chosen_option == "stone") {
            if (computer.chosen_option == "paper") {
                player lose
            }
            if (computer.chosen_option == "stone") {
                nerjeseno
            }
            if (computer.chosen_option == "scissors") {
                player win
            }
        } else if (player.chosen_option == "paper") {
            if (computer.chosen_option == "scissors") {
                player lose
            }
            if (computer.chosen_option == "paper") {
                nerjeseno
            }
            if (computer.chosen_option == "stone") {
                player win
            }
        }