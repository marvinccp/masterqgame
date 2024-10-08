import { gameResumeReducer } from '@/reducers/gameResumeReducer';
import { useRouter } from 'next/router';
import {useReducer, useEffect} from 'react'

const useResume = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };


     const initialState = {
       points: 0,
       correct: 0,
       questionsNumber: [],
       loading: true,
     };
     const [state, dispatch] = useReducer(gameResumeReducer, initialState);

     useEffect(() => {
       const points = JSON.parse(localStorage.getItem("points"));
       if (points) {
         dispatch({ type: "RESUME", payload: points });
       }
     }, []);

     //se crea una matriz donde esten los rangos y la calificación
     const rewardMap = {
       0: "zombie",
       1: "good",
       10: "excellent",
       20: "superior",
       25: "god",
       40: "heroe",
       50: "master",
     };

     //se crea un array con los valores maximos de los rangos, que son las key
     //  de las propiedades.

     const rewardKeys = Object.keys(rewardMap);

     /*
esta función recorre el array y compara el valor  de key actual
con la siguiente y key y con los puntos. basicamente, evalua si 
los puntos son menores que la próxima key . . .
*/
     // let reward;
     let reward = rewardKeys.find((key, i) => {
       const nextKey = rewardKeys[i + 1];
       return (
         state.points >= key &&
         (nextKey === undefined || state.points < nextKey)
       );
     });


     //asiganamos una variable que contiene el valor de la key

     let rewardInfo = rewardMap[reward];

     const pointsReward = {
       good: {
         img: "/icons/good.png",
         text: "Good Work",
       },
       excellent: { img: "/icons/excelent.png", text: "You Are Excelent" },
       superior: { img: "/icons/superior.png", text: "You Are Amazing" },
       god: { img: "/icons/god.png", text: "You Are a god" },
       heroe: { img: "/icons/heroe.png", text: "You Are A Hero" },
       master: { img: "/images/logo-master.png", text: "You Are A Master" },
       zombie: { img: "/icons/zombi.png", text: "You are a zombie" },
     };


  return {
    rewardInfo,
    pointsReward,
    points: state.points,
    loading: state.loading,
    correct: state.correct,
    questionsNumber: state.questionsNumber,
    handleLogout,
  };
}

export default useResume