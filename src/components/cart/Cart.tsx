import React, { useState } from 'react';
import { MarsPhoto } from '../../store/types/type';
import Modal from '../modal/Modal';
import styles from './Cart.module.css';

interface ICart {
  data: MarsPhoto;
  idx:number
}

const Cart: React.FC<ICart> = ({ data,idx }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.cart} onClick={() => setIsOpen(true)}>
        <img src={`${data.img_src}`} alt='' width={300} height={250} />
        <div className={styles.info}>
          <p>
            <span>Камера</span> : {data.camera.full_name}
          </p>
          <p>
            <span>Земная дата</span> : {data.earth_date}
          </p>
          <p>
            <span>Сол</span> : {data.sol}
          </p>
          <p>
            <span>Название марсохода</span> : {data.rover.name}
          </p>
        </div>
      </div>
      {isOpen&&<Modal data={data} setIsOpen={setIsOpen} idx={idx}/>}
    </>
  );
};

export default Cart;
