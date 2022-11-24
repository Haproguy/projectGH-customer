import { useState } from 'react';
import { Link } from 'react-router-dom';


const TableList = ({ listData }) => {
    //리스트 데이터가 담긴 state값 선언

    const click = (e) => {
        sessionStorage.setItem('dataKey', e.target.dataset.value)
        window.location.href = '/FAQRead'
    }

    return (
        <table>
            <thead>
                <tr >
                    <th>유형</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>작성자</th>
                </tr>
            </thead>

            <tbody>
                {listData.map((v, i) => {
                    return (
                        <tr onClick={click} className='tableTr'
                            key={`Faq${i}`}
                            data-value={i}>
                            <td onClick={click}
                                className="tableTd"
                                key={`FaqNum${i}`}
                                data-value={i}>{v.type}</td>
                            <td onClick={click}
                                className="tableTd"
                                key={`FaqTitle${i}`}
                                data-value={i}>{v.title}</td>
                            <td className="tableTd" key={`FaqDay${i}`}>{v.upDayt}</td>
                            <td className="tableTd" key={`FaqName${i}`}>{v.upName}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TableList;