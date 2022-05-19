import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../loading/Loading'
import {  AppStateType } from '../../store/store'
import { fetchMarsPhotos } from '../../store/thunk/mars'
import Cart from '../cart/Cart'
import Filter from '../filter/Filter'
import styles from './Content.module.css'
import { AllActions } from '../../store/actions/mars'
import { ThunkAction } from 'redux-thunk'

const Content: React.FC = () => {
    const dispatch = useDispatch()
    const {photos,loading} = useSelector((state:AppStateType)=>state.marsReducer)
    useEffect(() => {
        dispatch(fetchMarsPhotos())
    }, [])
    
  return (
      <div className={styles.content}>
          <div className={styles.container}>
              <div className={styles.title}>
                    <h2>Mars Rover Photos</h2>
                    <p>Каждый марсоход имеет собственный набор фотографий, хранящихся в базе данных, которые можно запрашивать отдельно.
                    Есть несколько возможных запросов, которые можно сделать с помощью API. Фотографии упорядочены по солу (марсианскому вращению или дню),
                    в который они были сделаны, считая от даты посадки марсохода.</p>
              </div>
              <Filter />
                  {loading
                  ? <Loading />
                  : (<div className={styles.body}>
                      {photos.length !== 0
                          ? photos.map((val,idx) => (
                              <Cart data={val} key={val.id} idx={idx}/>
                          ))
                          : <h2 className={styles.empty}>Ничего не найдено!</h2>
                      } </div>)}
              
        </div>
      </div>
  )
}

export default Content