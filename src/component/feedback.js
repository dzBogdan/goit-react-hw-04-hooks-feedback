import { useState, useEffect } from 'react';
import './feedback.moduls.css';
import Statistics from './Statistics';

export default function Feedback (){
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);
  const [total, setTotal]=useState(0);
  const [ feedback, setFeedBack]=useState(0);
    

   const  hendeleGood = () => {
     setGood(prevState => prevState + 1);
     setTotal(prevState => prevState + 1);
     setFeedBack((good/total)*100);
    
             
      }

   const   hendeleNeutral = ()  => {
       setNeutral(prevState => prevState + 1);
     setTotal(prevState => prevState + 1);
     setFeedBack((good/total)*100);
      }      

   const  hendeleBad = () => {
        setBad(prevState => prevState + 1);
     setTotal(prevState => prevState + 1);
     setFeedBack((good/total)*100);
      }

   return(
         <div>
             <h2>Отзывы клиентов</h2>
             <button type="button" className="button" onClick={hendeleGood}>Good</button>
             <button type="button" className="button" onClick={hendeleNeutral}> Neutral</button>
             <button type="button" className="button" onClick={hendeleBad}>Bad</button>
           {total!=0? 
            <Statistics 
             good = {good}
             neutral = {neutral}
             bad = {bad}
             total = {total}
             feedback = {feedback}
             />:<p>Нет статистики</p>}
         </div> 
        
         

     )   
    
}

