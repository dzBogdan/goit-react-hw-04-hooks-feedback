export default function Statistics({ good,neutral,bad,total,feedback}){
    return(  
        <div>
        <h2>Статистика</h2>
        <p>Good:               <span>{good}</span></p>
        <p>Neutral:            <span>{neutral}</span></p>
        <p>Bad:                <span>{bad}</span></p>
        <p>Total:              <span>{total}</span></p>
        <p>Positiv feedback    <span>{feedback} %</span></p>
        </div>
                );
}