import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <p className={cx('user')}>
                    SonTungMTP
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('name')}>Sơn Tùng MTP</span>
            </div>
        </div>
    );
}

export default AccountItem;
