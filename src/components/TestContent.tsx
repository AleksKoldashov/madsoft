import React from 'react';
import { data } from '../data';
import { Divider,Flex, Progress} from 'antd';
import TQuest1 from './TestQuestion/TestQuestion_1';
import TQuest2 from './TestQuestion/TestQuestion_2';
import { Timer } from './Utilit/Timer';
import {useAppSelector } from './redux/hooks/hooks';




export default function TestContent(){

const count = useAppSelector(state=>state.question.count)
const result = localStorage.getItem('progres') as string


return(
    <>
    <Timer/>
    <Flex align="center" wrap gap={30}>
    <Progress percent={parseInt(result)} steps={10} />
    </Flex>
    <Divider />
    {
        data.map((item, index)=>item.id===count? 
        <div key={item.id}>
        <h4>Вопрос № {index+1}</h4>
        <h3>{item.question}</h3>
        {item.property_question === 'q1' 
            ?
            <TQuest1 {...item} />
            :
            item.property_question === 'q2'
                ? 
                <TQuest2 {...item}/>
                :
                null
            }
        </div>
        :null)
    }
    
    </>
)
}