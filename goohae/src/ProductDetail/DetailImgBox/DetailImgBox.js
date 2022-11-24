import "./DetailImgBox.css";
import { useState } from "react";


// getImgData : 상품에 대한 이미지 데이터를 받음
export default function DetailImgBox({ getImgData }) {
    const [ImgIdx, setImgIdx] = useState(0);    // 선택한 이미지를 보여주기 위한 State변수

    // 선택한 subImg에 적용할 스타일
    const SelectStyle = {
        border: "2px solid blue"
    };

    // 사진 선택시 이벤트 함수
    function clickImg(e) {
        setImgIdx(+e.target.id);
    }

    return (
        <>
            <div className="ImgBoxContainer">
                <div className="mainImgContainer">
                    <img src={getImgData[ImgIdx]} alt="" />
                </div>

                <div className="subImgContainer">

                    {getImgData.map((v, i) => {
                        if (i === ImgIdx) {
                            return (
                                <img key={`subImg${i}`} src={v} alt="img"
                                    id={i} style={SelectStyle} onClick={clickImg} />
                            );
                        } else {
                            return (
                                <img key={`subImg${i}`} src={v} alt="img"
                                    id={i} onClick={clickImg} />
                            );
                        }
                    })}

                </div>
            </div>
        </>
    );
}