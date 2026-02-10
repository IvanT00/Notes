import classes from './NoticeItem.module.scss'
import deleteIcon from '../../assets/icons/deleteIcon.svg'
import type {Note} from "../../localStorage/initData.ts";


const NoticeItem = ({title, description, time}:Note) => {

    return (
        <div className={classes.item}>
            <div className={classes.item__info}>
                <h3 className={classes.item__title}>{title}</h3>
                <p className={classes.item__subtitle}>
                    <span className={classes.item__subtitle__time}>{time}</span>
                    {description}
                </p>
            </div>
            <div className={classes.delete__icon__container} title='Delete notice'>
                <img className={classes.delete__icon} src={deleteIcon} alt="Delete notice" width="32" height="32" />
            </div>
        </div>
    );
};

export default NoticeItem;