import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);


const CSSModule = () => {
    return (
        // 한번에 두개의 css적용시
        // <div className={`${style.wrapper} ${style.inverted}`}>
        <div className={cx('wrapper','inverted')}>
            안녕하세요, 저는 <span className='something'>CSSModule</span>
        </div>
    )
} 

export default CSSModule;