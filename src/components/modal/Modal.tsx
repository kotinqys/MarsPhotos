import React, { useEffect, useRef, useState } from 'react'
import { MarsPhoto } from '../../store/types/type'
import styles from './Modal.module.css'
import arrow from '../../assets/arrow.png'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../store/store'
import Loading from '../loading/Loading'

interface IModal {
    data: MarsPhoto,
    setIsOpen:(boolean:boolean)=>void,
    idx:number
}

const Modal:React.FC<IModal> = ({data,setIsOpen,idx}) => {
    const {photos} = useSelector((state:AppStateType)=>state.marsReducer)
    const [newData,setNewData] = useState(data)
    const index = useRef(idx)

    const nextPhoto = () =>{
        if(photos.length-1!==index.current){ 
            setNewData(photos[++index.current])
        } 
    }

    const prevPhoto = () =>{
        if(index.current!==0){
            setNewData(photos[--index.current])
        }
    }

  return (
    <div className={styles.modal}>
        <div className={styles.content}>
            <span className={styles.close} onClick={()=>setIsOpen(false)}>X</span>
                <div className={styles.imges}>
                    <img src={arrow} className={styles.left} onClick={prevPhoto}/>
                    <img src={`${newData.img_src}`} alt="" width={750} height={700}/>
                    <img src={arrow} className={styles.right} onClick={nextPhoto}/>
                </div>
                <div className={styles.info}>
                    <p><span>Идентификатор</span> : {newData.id}</p>
                    <p><span>Сол</span> : {newData.sol}</p>
                    <p><span>Земная дата</span> : {newData.earth_date}</p>
                    <p><span>Камера </span>: {newData.camera.full_name}</p>
                    <p><span>Марсоход </span>: {newData.rover.name}</p>
                    <p><span>Дата запуска</span> : {newData.rover.launch_date}</p>
                    <p><span>Дата посадки</span> : {newData.rover.landing_date}</p>
                    <p><span>Статус марсохода</span> : {newData.rover.status}</p>
                </div>     
        </div>
    </div>
  )
}

export default Modal