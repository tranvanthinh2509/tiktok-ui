import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Header from './Header';
import { useState } from 'react';
const defaultFn = () => {};

const cx = classNames.bind(style);
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderMenuUtem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive="true"
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-Popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, history.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderMenuUtem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
