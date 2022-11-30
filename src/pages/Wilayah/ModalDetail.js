import React from "react";
import {
    Modal,
    Row,
    Col,
    Image,
    Space
} from "antd";
import {
    MapContainer,
    TileLayer,
    Marker
} from "react-leaflet"

export default function ModalDetail({
    visible,
    onCancel,
    loading,
    data
}) {

    const lat = parseInt(data.lat);
    const long = parseInt(data.long)
    const position = [lat, long]
    return (
        <Modal
            centered
            title={"Detail"}
            visible={visible}
            onCancel={onCancel}
            width={"90%"}
            maskClosable={false}
        >
            <Row justify="space-between">
                <Col>
                    <p>Kecamatan {data.kecamatan}</p>
                    <p>{data.nagari}</p>
                    <p>Desa {data.desa}</p>
                    <p>Dusun {data.dusun}</p>
                    <p>Jorong {data.jorong}</p>
                    <p>Nomor Rumah {data.nomor_rumah}</p>
                    <p>RT {data.rt}</p>
                    <p>Status Kepemilikan {data.status_kepemilikan}</p>
                    <p>Jenis {data.jenis}</p>
                    <p>Nama KK {data.nama_kepala_keluarga}</p>
                    <p>No KK {data.nomor_kk}</p>
                    <p>Keterangan {data.keterangan}</p>
                    <p>Kondisi {data.kondisi}</p>
                    <p>Jumlah Keluarga {data.jumlah_keluarga}</p>
                    <p>Jumlah Penghuni {data.jumlah_penghuni}</p>
                    <p>Luas Rumah {data.luas_rumah} M2</p>
                </Col>
                <Col>

                </Col>
            </Row>
            <Space>
                <Image
                    width={500}
                    src={data.file}
                />

                <MapContainer className="markercluster-map"
                    center={[lat, long]}
                    style={{
                        width: '500px',
                        height: '500px'
                    }}
                    zoom={10}
                    scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} />
                </MapContainer>
            </Space>
        </Modal>
    );
}
