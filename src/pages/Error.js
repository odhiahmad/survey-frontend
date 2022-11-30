import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

import error from './../assets/img/illustration_error.png';

function Error() {

  return (
    <div className="error-container">
      <img className="error-image" src={error} alt="404" />
      <p className="error-title">Internal Server Sedang Sibuk</p>
      <p className="error-desc">Kami kesulitan untuk koneksikan menuju server, coba cek jaringan kamu atau coba lagi.</p>
      <Link to="/">
        <Button type="primary" className="error-btn">Kembali ke Beranda</Button>
      </Link>
    </div>
  );

}
export default Error