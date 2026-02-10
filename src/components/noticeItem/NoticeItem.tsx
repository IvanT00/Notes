import classes from './NoticeItem.module.scss'
import deleteIcon from '../../assets/icons/deleteIcon.svg'

const NoticeItem = () => {


    return (
        <div className={classes.item}>
            <div className={classes.item__info}>
                <h3 className={classes.item__title}>Новая заметка</h3>
                <p className={classes.item__subtitle}><span className={classes.item__subtitle__time}>10:13</span>Нет дополнительного текста</p>
            </div>
            <div className={classes.delete__icon__container} title='Delete notice'>
                <img className={classes.delete__icon} src={deleteIcon} alt="Delete notice" width="32" height="32" />
            </div>
        </div>
    );
};

export default NoticeItem;