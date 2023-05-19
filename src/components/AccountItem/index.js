import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ac20b21a2cc5ffd07fabcedf5d20fbb5~c5_100x100.jpeg?x-expires=1684645200&x-signature=kEF%2F0JUXQJBtxfZdx5vcPCHmSWM%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>Nguyen Van A</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
