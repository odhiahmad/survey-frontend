import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

import notfound from './../assets/img/illustration_404.png';

function NoMatch() {

  return (
    <div className="notfound-container">
      <img className="notfound-image" src={notfound} alt="404" />
      <p className="notfound-title">Halaman Tidak Ditemukan</p>
      <p className="notfound-desc">Halaman yang kamu cari tidak ditemukan, silahkan kembali ke halaman sebelumnya.</p>
      <Link to="/">
        <Button type="primary" className="notfound-btn">Kembali ke Beranda</Button>
      </Link>
    </div>
  );

}
export default NoMatch