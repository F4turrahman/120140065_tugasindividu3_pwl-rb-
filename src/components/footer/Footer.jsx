import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              120140065 - Tugas Individu 3 - Pemrograman Web Lanjut Tahun {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer