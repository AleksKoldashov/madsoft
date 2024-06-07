import React, { useState } from 'react';
import { Checkbox, Divider, Button } from 'antd';
import { iData } from '../types/types';
import { useAppDispatch } from '../redux/hooks/hooks';
import { incriment } from '../redux/slice/questionSlise';




const CheckboxGroup = Checkbox.Group;

export default function TQuest1 (items:iData ){
const dispatch = useAppDispatch()
const a = items.number_answer
const property_question = items.property_question === 'q1'
const answer = items.answer  
const plainOptions = [`A: ${answer.a}`,`B: ${answer.b}`, `C: ${answer.c}`, `D: ${answer.d}`];  
const [checkedList, setCheckedList] = useState<string[]>([]);

  const checkAll = property_question ? a <= checkedList.length : a <= checkedList.length
  const onChange = (list: string[]) => {
    setCheckedList(list);
  };

  const result=()=>{
    const str =  checkedList?.join(',')
    const correct_answer = items.correct_answer === str
    localStorage.setItem(`${items.id}`, `${correct_answer}`)
    console.log('ss');
    dispatch(incriment())
  }

    return(
        <>
        <Divider />
        {
          a===1? <p>введите один вариант ответа</p>: <p>введите несколько вариантов ответа</p>
        }
        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        <Divider />
        <Button type="primary" disabled={!checkAll} onClick={()=>result()}>Ответить</Button>
      </>
    )
}