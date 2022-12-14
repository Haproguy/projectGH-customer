import "./Header.css";
import { Link } from "react-router-dom";

// navEvt : nav클릭 시 해당 카테고리별 분류에 대한 구분을 위한 이벤트 함수를 받음
export default function Header({ navEvt }) {
    function toScrollTop() {
        window.scrollTo({ top: 0 });
    }

    return (
        <header>
            <div className="upperHeader">
                {/* ===== 로고 및 네비 부분 ===== */}
                <h1 className="logoContainer"><Link to="/" onClick={toScrollTop}>goohae</Link></h1>

                <div className="nav">
                    <ul className="forUserContainer">
                        <li className="loginInner">
                            <a href="#!">
                                <img src="./images/icon/login icon.png" alt="login" />
                                <span>LOGIN</span>
                            </a>
                        </li>

                        <li className="joinInner">
                            <a href="#!">
                                <img src="./images/icon/join.png" alt="join" />
                                <span>JOIN</span>
                            </a>
                        </li>

                        <li className="cartInner">
                            <a href="#!">
                                <img src="./images/icon/cart.png" alt="cart" />
                                <span>CART</span>
                            </a>
                        </li>
                    </ul>

                    <form action="." className="searchContainer">
                        <input type="text" placeholder="Search" />
                        <button />
                    </form>
                </div>
            </div>

            {/* ===== 카테고리 및 이용문의 부분 ===== */}
            <div className="underHeader">
                <ul className="categoryContainer">
                    <li><span>거실</span>
                        <ul>
                            <li><Link to="/subPageLiving" id="living.0" onClick={(e) => navEvt(e)}>소파</Link></li>
                            <li><Link to="/subPageLiving" id="living.1" onClick={(e) => navEvt(e)}>테이블</Link></li>
                            <li><Link to="/subPageLiving" id="living.2" onClick={(e) => navEvt(e)}>의자</Link></li>
                            <li><Link to="/subPageLiving" id="living.3" onClick={(e) => navEvt(e)}>TV콘솔</Link></li>
                        </ul>
                    </li>

                    <li><span>침실</span>
                        <ul>
                            <li><Link to="/subPageBedroom" id="bed.0" onClick={(e) => navEvt(e)}>침대</Link></li>
                            <li><Link to="/subPageBedroom" id="bed.1" onClick={(e) => navEvt(e)}>매트리스</Link></li>
                            <li><Link to="/subPageBedroom" id="bed.2" onClick={(e) => navEvt(e)}>협탁</Link></li>
                        </ul>
                    </li>

                    <li><span>주방</span>
                        <ul>
                            <li><Link to="/subPageDining" id="dining.0" onClick={(e) => navEvt(e)}>식탁</Link></li>
                            <li><Link to="/subPageDining" id="dining.1" onClick={(e) => navEvt(e)}>의자</Link></li>
                        </ul>
                    </li>

                    <li><span>드레스룸</span>
                        <ul>
                            <li><Link to="/subPageDressroom" id="dress.0" onClick={(e) => navEvt(e)}>행거</Link></li>
                            <li><Link to="/subPageDressroom" id="dress.1" onClick={(e) => navEvt(e)}>수납장</Link></li>
                            <li><Link to="/subPageDressroom" id="dress.2" onClick={(e) => navEvt(e)}>화장대</Link></li>
                        </ul>
                    </li>

                    <li><span><img src="./images/icon/FAQicon.png" alt="img" />이용문의</span>
                        <ul>
                            <li><Link to="/cutomerMain">이용문의</Link></li>
                            <li><Link to="/notice">공지사항</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
}