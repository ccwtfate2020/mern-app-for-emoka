import React from 'react'
import { Link } from 'react-router-dom'

import footer_logo from '../Assets/logo.png'
import facebook_icon from '../Assets/facebook_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import x_icon from '../Assets/x_icon.png'
import plurk_icon from '../Assets/plurk_icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-detail">
            <h1>FOLLOW ME</h1>
            <div className="footer-logo-name">
                <img src={footer_logo} alt="" />
                <div className="footer-mydetail">
                    <p>含情目(EMOKA)</p>
                    <p>ha.qing.mu00@gmail.com</p>
                </div>
            </div>
            <p>努力畫圖的芽菜幽靈曾參與長鴻出版社「偷情」封面繪製、以及「新瑪奇英雄傳」遊戲宣傳圖同人活躍中</p>
            <div className="footer-socials-icon">
                <div className="footer-socials-icons-container">
                    <Link to="https://www.instagram.com/han_qing_mu/" target='_blank'><img src={instagram_icon} alt="" /></Link>
                </div>
                <div className="footer-socials-icons-container">
                    <Link to="https://www.facebook.com/profile.php?id=100014076946059" target='_blank'><img src={facebook_icon} alt="" /></Link>
                </div>
                <div className="footer-socials-icons-container">
                    <Link to="https://x.com/E_MO_KA" target='_blank'><img src={x_icon} alt="" /></Link>
                </div>
                <div className="footer-socials-icons-container">
                    <Link to="https://www.plurk.com/E_MO_KA" target='_blank'><img src={plurk_icon} alt="" /></Link>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved By EMOKA.</p>
        </div>
    </div>
  )
}

export default Footer