import React from 'react';
import './modal.css';


const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  ///랜덤 추천
  const recom=["한식","중식","돈까스/일식","회/초밥","아시안 음식","치킨","피자","햄버거","죽","국수","양식","카페 브런치","고기/구이","도시락","뷔페","바(bar)에서"]
  const getRandomIndex=function(length){
    return parseInt(Math.random()*length)
  }

  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
            {/*<main>{props.children}</main>*/}
            <main>오늘은 <span>{recom[getRandomIndex(recom.length)]} </span> 어떠신가요? </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
export default Modal;