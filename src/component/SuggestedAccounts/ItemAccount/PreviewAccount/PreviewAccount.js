import classNames from 'classnames/bind';
import styles from './PreviewAccount.module.scss';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PreviewAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt=""
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d5fd77329e0a383c2b01e5a8495a9e1f~c5_100x100.jpeg?lk3s=a5d48078&amp;x-expires=1703941200&amp;x-signature=2nsC%2Fk%2FZNr55sTenY3iVzLoQpHw%3D"
                />
                <Button primary>Theo dõi</Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>ntt.hien03</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <h3 className={cx('name')}>Nguyễn Hiền</h3>
                <div className={cx('analatics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('title')}>Follower</span>
                    <strong className={cx('value')}>9.6M</strong>
                    <span className={cx('title')}>Like</span>
                </div>
            </div>
        </div>
    );
}

export default PreviewAccount;
