import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function Header({ title, onBack }) {
    return (
        <header className={cx('Header-item')}>
            <button onClick={onBack} className={cx('btnBack')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('title-header')}>{title}</h4>
        </header>
    );
}

export default Header;
