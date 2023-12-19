import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/image';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Button from '~/component/Button';
import AccountItem from '~/component/AccountIItem';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faCloudUpload,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Menu from '~/component/Popper/Menu/Menu';

const cx = classNames.bind(style);
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'languege',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languege',
                    code: 'vn',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback And Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Nhà sáng tạo nội dung',
    },
];

const userItem = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/SonTung',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Give Coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const onHandleChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languege':
                console.log(menuItem);
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
                    interactive="true"
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck="true"></input>

                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('close-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <button className={cx('find-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                fit
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className={cx('plus')}
                                    />
                                }
                            >
                                Update
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userItem : MENU_ITEMS}
                        onChange={onHandleChange}
                    >
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                                alt="Sơn Tùng"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
