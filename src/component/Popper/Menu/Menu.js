import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const defaultFn = () => {};

const cx = classNames.bind(style);
function Menu({
    children,
    items = [],
    hindOnClick = false,
    onChange = defaultFn,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    // Back Menu
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

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
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-Popper')}>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <div className={cx('menu-body')}>{renderMenuUtem()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive="true"
            offset={[12, 8]}
            delay={[0, 500]}
            hideOnClick={hindOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hindOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
