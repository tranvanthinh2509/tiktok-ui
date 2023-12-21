import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ result }) {
    return (
        <Link to={'/profile'} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={result.avatar}
                alt={result.full_name}
            />
            <div className={cx('info')}>
                <p className={cx('user')}>
                    {result.full_name}
                    {result.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <span className={cx('name')}>{result.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
