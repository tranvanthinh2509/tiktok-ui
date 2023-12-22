import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/image';
import config from '~/config';
import Tippy from '@tippyjs/react';

import Button from '~/component/Button';

import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Menu from '~/component/Popper/Menu/Menu';
import {
    GiveCoin,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    OpenMessages,
    ProFileIcon,
    QuestionIcon,
    SettingIcon,
    UploadIcon,
} from '~/component/Icons';
import Image from '~/component/Image';
import Search from './Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
        icon: <QuestionIcon />,
        title: 'Feedback And Help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Nhà sáng tạo nội dung',
    },
];

const userItem = [
    {
        icon: <ProFileIcon />,
        title: 'View Profile',
        to: '/SonTung',
    },
    {
        icon: <GiveCoin />,
        title: 'Give Coin',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log Out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
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
                <Link to={config.linkTo.home} className={cx('header-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 200]}
                                content="Open Messages"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <OpenMessages />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>12</span>
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
                            <Image
                                className={cx('user-avatar')}
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
                                alt="Sơn Tùng"
                                // fallback="https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png"
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
