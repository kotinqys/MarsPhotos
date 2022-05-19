import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMarshPhotosByDate, fetchMarshPhotosBySol } from '../../store/thunk/mars'
import styles from './Filter.module.css'

const Filter: React.FC = () => {
  const [bySolo, setBySolo] = useState(true)

  return (
      <div className={styles.filter}>
          <div className={styles.options}>
            <p className={bySolo ? styles.active : ''} onClick={ ()=>setBySolo(true)}>По солу</p>
            <p className={bySolo ? '' : styles.active} onClick={() => setBySolo(false)}>По дате</p>
          </div>
          {bySolo ? <Sol /> : <Date />}
    </div>
  )
}

export default Filter

//SOL
const Sol: React.FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('1000')
    const [camera, setCamera] = useState('FHAZ')
    
    const getResult = () => {
        dispatch(fetchMarshPhotosBySol({ value, camera }))
    }
    return (
        <div className={styles.tab}>
            <button onClick={getResult}>Получить</button>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <select name="camera-name" value={camera} onChange={(e => setCamera(e.target.value))}>
                <option value="FHAZ">FHAZ</option>
                <option value="RHAZ">RHAZ</option>
                <option value="MAST">MAST</option>
                <option value="CHEMCAM">CHEMCAM</option>
                <option value="MAHLI">MAHLI</option>
                <option value="MARDI">MARDI</option>
                <option value="NAVCAM">NAVCAM</option>
                <option value="PANCAM">PANCAM</option>
                <option value="MINITES">MINITES</option>
            </select>
        </div>
    )
}

//DATE
const Date: React.FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [camera, setCamera] = useState('FHAZ')
    
    const getResult = () => {
        if (value !== '') {
            dispatch(fetchMarshPhotosByDate({ value, camera }))
        }
    }
    return (
        <div className={styles.tab}>
            <button onClick={getResult}>Получить</button>
            <input type="date" value={value} onChange={e => setValue(e.target.value)} />
            <select name="camera-name" value={camera} onChange={(e => setCamera(e.target.value))}>
                <option value="FHAZ">FHAZ</option>
                <option value="RHAZ">RHAZ</option>
                <option value="MAST">MAST</option>
                <option value="CHEMCAM">CHEMCAM</option>
                <option value="MAHLI">MAHLI</option>
                <option value="MARDI">MARDI</option>
                <option value="NAVCAM">NAVCAM</option>
                <option value="PANCAM">PANCAM</option>
                <option value="MINITES">MINITES</option>
            </select>
        </div>
    )
}