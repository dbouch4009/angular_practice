import {Games} from '../entities/games';
export class LoggingService{
    logGameAddition(game: Games){
        console.log(`${game.name} added with a ${game.rating} rating.`);
    }

    logTestOutput(output: string){
        console.log(`Success: ${output}`);
    }

    logColorChange(color: string){
        console.log(`Color changed to ${color}.`);
    }
}