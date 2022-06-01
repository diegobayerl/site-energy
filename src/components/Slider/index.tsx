
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function Slider () {

    const [Imagetrue, setImagetrue] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            Imagetrue < 3 ? setImagetrue(Imagetrue + 1) : setImagetrue(1);
        }, 5000);
    }, [Imagetrue]);

    return (
        <div className={styles.slider}>
            
            <div className={Imagetrue == 1 ? styles.activeimage : styles.desableImage}>
                <img src="/images/img1.png" alt="" />
            </div>

            <div className={Imagetrue == 2 ? styles.activeimage : styles.desableImage}>
                <img src="/images/img2.png" alt="" />
            </div>

            <div className={Imagetrue == 3 ? styles.activeimage : styles.desableImage}>
                <img src="/images/img3.png" alt="" />
            </div>

            <div className={styles.navigation}>
                <button className={Imagetrue == 1 && styles.activebutton} onClick={() => setImagetrue(1)}/>
                <button className={Imagetrue == 2 && styles.activebutton} onClick={() => setImagetrue(2)}/>
                <button className={Imagetrue == 3 && styles.activebutton} onClick={() => setImagetrue(3)}/>
            </div>
        </div>
    );
}