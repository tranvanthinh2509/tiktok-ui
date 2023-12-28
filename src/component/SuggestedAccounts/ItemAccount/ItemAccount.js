import classNames from 'classnames/bind';
import styles from '../SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Tippy from '@tippyjs/react/headless';
import PreviewAccount from './PreviewAccount';

const cx = classNames.bind(styles);

function ItemAccount() {
    const previewAccount = (prop) => (
        <div tabIndex="-1" {...prop}>
            <PopperWrapper>
                <PreviewAccount />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy
                interactive="true"
                delay={[800, 0]}
                offset={[-20, 0]}
                render={previewAccount}
                placement="bottom"
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d5fd77329e0a383c2b01e5a8495a9e1f~c5_100x100.jpeg?lk3s=a5d48078&amp;x-expires=1703941200&amp;x-signature=2nsC%2Fk%2FZNr55sTenY3iVzLoQpHw%3D"
                        alt=""
                    />

                    <div className={cx('info')}>
                        <h4 className={cx('nickname')}>
                            <strong>ntt.hien03</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </h4>
                        <h3 className={cx('name')}>Nguyễn Hiền</h3>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default ItemAccount;
