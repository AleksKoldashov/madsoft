import React, { useState } from 'react';
import { Input, Button, Divider } from 'antd';
import { iData } from '../types/types';
import { useAppDispatch } from '../redux/hooks/hooks';
import { incriment } from '../redux/slice/questionSlise';

export default function TQuest2 (items:iData){
  const dispatch = useAppDispatch()
  const a = items.number_answer
  const property_question = items.property_question === 'q1'

  const [checkedList, setCheckedList] = useState<string>('');

  const checkAll = property_question ? a <= checkedList.length : a <= checkedList.length
  
  const result=()=>{
    const correct_answer = items.correct_answer === checkedList.toLocaleLowerCase()
    localStorage.setItem(`${items.id}`, `${correct_answer}`)
    dispatch(incriment())
  }
    return(
    <>
    <Divider />
        {
        a===1? <p>напишите одно слово</p>: <p>напишите развернутый ответ</p>
        }
        <Input placeholder="Basic usage" onChange={(e)=>setCheckedList(e.target.value)}/>
        <Divider />
        <Button type="primary" disabled={!checkAll} onClick={()=>result()}>Ответить</Button>
    </>
    )
}