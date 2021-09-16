import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className="mt-3">&nbsp;</div>
        <div>
          <div className="footer-1">
            <div className="footer">
              <div className="footer-header">THÔNG TIN VỀ CHÚNG TÔI</div>
            </div>
            <div className="footer-body my-3">
              <div className="footer-title">SHOP THỜI TRANG</div>

              <div className="footer-text mt-1">
                Địa chỉ:
                <Link to="/lienhe#map">
                  102/44L đường 3/2, Hưng Lợi, Ninh Kiêu, Tp Cần Thơ
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="footer">
              <div className="footer-header">HỔ TRỢ KHÁCH HÀNG</div>
            </div>
            <div className="footer-body mt-3">
              <div className="footer-text">
                <Link to="tel:0399234016" title="Hotline">
                  Hotline: <span>0399234016</span>
                </Link>
              </div>
              <div className="footer-text mt-1">
                <Link to="mailto:ltanhutd20086@cusc.ctu.edu.vn" title="Email">
                  Email:
                  <span>ltanhutd20086@cusc.ctu.edu.vn</span>
                </Link>
              </div>
              <div className="footer-title mt-3">THEO DÕI FANPAGE</div>
              <div className="footer-text mt-2">
                <Link to="https://www.facebook.com/" title="Fanpage">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span>&nbsp;Facebook</span>
                </Link>
              </div>
              <div className="footer-text mt-2 mb-3">
                <Link to="https://instagram.com" title="Fanpage">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <span>&nbsp;Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-3">
            <div className="footer">
              <div className="footer-header">CHÍNH SÁCH</div>
              <div className="footer-body mt-3">
                <div className="footer-text">
                  <ul>
                    <li className="mt-1">
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      &nbsp;
                      <span>
                        <Link to="./../../frontend/pages/huongdan.html">
                          Chính sách đổi trả
                        </Link>
                      </span>
                    </li>
                    <li className="mt-1">
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      &nbsp;
                      <span>
                        <Link to="./../../frontend/pages/huongdan.html">
                          Chính sách vận chuyển
                        </Link>
                      </span>
                    </li>
                    <li className="mt-1">
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      &nbsp;
                      <span>
                        <Link to="./../../frontend/pages/huongdan.html">
                          Chăm sóc khách hàng
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-4">
            <div className="footer">
              <div className="footer-header">LIÊN HỆ CHÚNG TÔI</div>
            </div>
            <div className="footer-body mt-3">
              <span className="contac">
                <Link to="tel:0399234016" title="phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </Link>
              </span>
              <span className="contac ml-3">
                <Link to="https://www.facebook.com/" title="Facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </span>
              <span id="ins" className="contac ml-3">
                <Link to="https://instagram.com" title="Instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </span>
              <span id="twi" className="contac ml-3">
                <Link to="https://twitter.com/" title="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bản quyền  */}
      <div className="grid ban-quyen mt-3">
        <div className="row">
          <div className="py-3 text-center c-12">
            Bản quyền thiết kế thuộc về &copy;&nbsp;
            <Link
              to="mailto:ltanhutd20086@cusc.ctu.edu.vn"
              title="Lưu Trần Anh Nhựt"
            >
              Lưu Trần Anh Nhựt
            </Link>
            <script>document.write(new Date().getFullYear());</script>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
