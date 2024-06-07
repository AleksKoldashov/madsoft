import React, {useState} from 'react';
import { Button,  Modal} from 'antd';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './styles/app.css'
import Result from './Utilit/Result';
import { useAppDispatch } from './redux/hooks/hooks';
import { count1 } from './redux/slice/questionSlise';



export default function App (){

const dispatch = useAppDispatch()
  const removeLocalStorage =()=>{
    localStorage.clear()
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
       setIsModalOpen(true)
     };
 
   const handleOk = () => {
     setIsModalOpen(false);
   };
 
   const handleCancel = () => {
     setIsModalOpen(false);
   };
 
 
    return(
  
    <div className='app'>
    <h1>Test JavaScript</h1>
    <hr/>
    <NavLink to={`/q`}><Button type="primary" onClick={()=>{removeLocalStorage()}}>Начать Тест</Button></NavLink>
    <NavLink to={`/`}><Button type="primary" onClick={()=>[showModal(), dispatch(count1())]}>Завершить Тест</Button></NavLink>
    <hr/>
    <Outlet/>
    <>
    <Modal title="Ваш результат" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <Result/>
    </Modal>
    </>
    </div>
  
 
    )
}