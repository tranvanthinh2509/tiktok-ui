import { forwardRef, useState } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallBack = images.noImage,
            ...prop
        },
        ref,
    ) => {
        const [fallback, setFallBack] = useState('');
        const handleError = () => {
            setFallBack(customFallBack);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...prop}
                onError={handleError}
            />
        );
    },
);
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
