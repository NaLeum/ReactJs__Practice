import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);
// classnames는 css클래스를 조건부로 설정하때 매우 유용한 라이브러리이다.
// 또한 css module을 사용할때 이 라이브러리를 사용하면 매우 편리하다


const CSSModule = () => {
    return (
        // 한번에 두개의 css적용시
        // <div className={`${style.wrapper} ${style.inverted}`}>

        //classnames의 적용 예
        <div className={cx('wrapper','inverted')}>
            안녕하세요, 저는 <span className='something'>CSSModule</span>
        </div>
    )
} 

export default CSSModule;