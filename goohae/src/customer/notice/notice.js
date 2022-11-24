import './notice.css';
import BoardList from "../customerCommonComponant/boardList";
import BoxList from './../customerCommonComponant/BoxList';
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';


const Notice = () => {

    window.scrollTo({ top: 0 });


    //보드리스트안에 LINK를 집어넣기위해 만든 배열
    const categoryBox = [
        <Link to="/notice">공지사항</Link>,
        <Link to="/FAQ">FAQ</Link>,
        <Link to="/inquiry">상담문의</Link>
    ]

    //클릭시 스토리지에 있는 데이터를 구별해줄 키값 저장하는 변수
    let checkKeyI;

    //게시글 클릭하면 해당 데이터 인덱스 번호를 저장하고 읽기페이지에서 스토리지에 있는 데이터를 인덱싱해줌
    const checkKey = (e) => {
        checkKeyI = e.target.dataset.value;
        sessionStorage.setItem('dataKey', JSON.stringify(checkKeyI));

        window.location.href = '/ReadPage'
    }

    return (
        <>
            <main>
                <h1>공지사항</h1>
                <BoxList
                    ulClassName={'categoryBox'}
                    listContent1={categoryBox[0]}
                    listContent2={categoryBox[1]}
                    listContent3={categoryBox[2]} />

                <BoardList
                    checkKey ={checkKey} />

                <button><Link to='/boardWrite'>공지쓰기</Link></button>
            </main>



        </>
    );
}

export default Notice; 