import { forwardRef, useState } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';
import classNames from 'classnames';

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

export default Image;
