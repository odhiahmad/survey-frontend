import React, { useEffect, useState } from 'react'
import LayoutSurvey from "./../../layouts/BaseLayout";
import { useParams } from "react-router-dom"
import { Button, Space, Table, Spin, Col, Row, Pagination, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    getWilayah, createWilayah, updateWilayah
} from "../../store/actions";
import Swal from 'sweetalert2'
import { EditOutlined, PlusCircleOutlined, FolderOutlined } from "@ant-design/icons";
import ModalForm from './ModalForm'
import ModalDetail from './ModalDetail'

export default function Wilayah() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [modalForm, setModalForm] = useState(false)
    const [modalDetail, setModalDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState([]);
    const [formType, setFormType] = useState('add');
    const { Search } = Input;


    const getWilayahResult = useSelector(
        (state) => state.getWilayah.result
    );
    const getWilayahLoading = useSelector(
        (state) => state.getWilayah.loading
    );
    const getWilayahError = useSelector(
        (state) => state.getWilayah.error
    );

    const createWilayahResult = useSelector(
        (state) => state.createWilayah.result
    );
    const createWilayahLoading = useSelector(
        (state) => state.createWilayah.loading
    );
    const createWilayahError = useSelector(
        (state) => state.createWilayah.error
    );

    const updateWilayahResult = useSelector(
        (state) => state.updateWilayah.result
    );
    const updateWilayahLoading = useSelector(
        (state) => state.updateWilayah.loading
    );
    const updateWilayahError = useSelector(
        (state) => state.updateWilayah.error
    );

    const dataTable = getWilayahResult !== null ? getWilayahResult.rows : null

    useEffect(() => {
        const body = {
            "Limit": 50,
            "Page": 1,
            "Kota": parseInt(id)
        }
        dispatch(getWilayah(body))
        if (getWilayahError && getWilayahError !== null) {
            Swal.fire({
                title: "Gagal",
                text: `${getWilayahError}`,
                icon: "error",

            });
            dispatch(getWilayah({ reset: true }));
        }
    }, [dispatch, getWilayahError, id]);

    useEffect(() => {
        if (createWilayahError && createWilayahError !== null) {
            Swal.fire({
                title: "Gagal",
                text: `${createWilayahError}`,
                icon: "error",

            });
            dispatch(createWilayah({ reset: true }));
        } else if (createWilayahResult !== null) {
            Swal.fire({
                title: "Berhasil",
                text: `Menambahkan data`,
                icon: "success",

            });
            dispatch(createWilayah({ reset: true }));
        }
    }, [dispatch, createWilayahError, createWilayahResult]);

    useEffect(() => {
        if (updateWilayahError && updateWilayahError !== null) {
            Swal.fire({
                title: "Gagal",
                text: `${updateWilayahError}`,
                icon: "error",

            });
            dispatch(updateWilayah({ reset: true }));
        } else if (updateWilayahResult !== null) {

            Swal.fire({
                title: "Berhasil",
                text: `Berhasil update data`,
                icon: "success",

            });
            dispatch(updateWilayah({ reset: true }));
        }
    }, [dispatch, updateWilayahError, updateWilayahResult]);

    const openModalForm = (value, data) => {
        setModalForm(true);
        setFormType(value);
        if (value === "edit") {
            setDataDetail(data)
        }

    }

    const openModalDetail = (values) => {
        setModalDetail(true)
        setDataDetail(values)
    }

    const handleChange = (page, pageSize) => {
        const body = {
            "Limit": pageSize,
            "Page": page,
            "Kota": parseInt(id),
        }
        dispatch(getWilayah(body));
    }

    const onSearch = (value) => {
        const body = {
            "Limit": 50,
            "Page": 1,
            "Kota": parseInt(id),
            "Cari": value
        }
        dispatch(getWilayah(body));
    }

    const onFinish = (values) => {
        if (formType === "add") {
            const body = {
                "Kota": parseInt(values.kota),
                "Kecamatan": values.kecamatan,
                "Desa": values.desa,
                "Nagari": values.nagari,
                "Jorong": values.jorong,
                "Dusun": values.dusun,
                "Rt": values.rt,
                "NomorRumah": values.nomorRumah,
                "Lat": values.lat,
                "Long": values.long,
                "JumlahKeluarga": parseInt(values.jumlahKeluarga),
                "JumlahPenghuni": parseInt(values.jumlahPenghuni),
                "NamaKepalaKeluarga": values.namaKepalaKeluarga,
                "NomorKK": values.nomorKK,
                "StatusKepemilikan": values.statusKepemilikan,
                "KeteranganKepemilikan": values.keteranganKepemilikan,
                "LuasRumah": parseInt(values.luasRumah),
                "Kondisi": values.kondisi,
                "Jenis": values.jenis,
                "Keterangan": values.keterangan,
                "Ekstensi": ".jpg",
                "File": values.gambar[0].base64.split(",")[1]
            }
            dispatch(createWilayah(body))
        } else {
            const body = {
                "Id": values.id,
                "Kota": parseInt(values.kota),
                "Kecamatan": values.kecamatan,
                "Desa": values.desa,
                "Nagari": values.nagari,
                "Jorong": values.jorong,
                "Dusun": values.dusun,
                "Rt": values.rt,
                "NomorRumah": values.nomorRumah,
                "Lat": values.lat,
                "Long": values.long,
                "JumlahKeluarga": parseInt(values.jumlahKeluarga),
                "JumlahPenghuni": parseInt(values.jumlahPenghuni),
                "NamaKepalaKeluarga": values.namaKepalaKeluarga,
                "NomorKK": values.nomorKK,
                "StatusKepemilikan": values.statusKepemilikan,
                "KeteranganKepemilikan": values.keteranganKepemilikan,
                "LuasRumah": parseInt(values.luasRumah),
                "Kondisi": values.kondisi,
                "Jenis": values.jenis,
                "Keterangan": values.keterangan,
                "Ekstensi": ".jpg",
            }
            dispatch(updateWilayah(body))
        }


    }

    const columns = [
        {
            title: "Kecamatan",
            width: 20,
            dataIndex: "kecamatan",
            key: "kecamatan",

        },
        {
            title: "Nagari",
            width: 20,
            dataIndex: "nagari",
            key: "nagari",

        },
        {
            title: "Jorong",
            width: 20,
            dataIndex: "jorong",
            key: "jorong",

        },
        {
            title: "Nama Kepala Keluarga",
            dataIndex: "nama_kepala_keluarga",
            key: "nama_kepala_keluarga",
            width: 20,

        },
        {
            title: "No KK",
            dataIndex: "nomor_kk",
            key: "nomor_kk",
            width: 15,
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            width: 20,
            render: (text, record) => (
                <Row>
                    <Space size="small" align="center">

                        <Button
                            className="btn-success"
                            type="primary"
                            onClick={() => openModalForm("edit", record)}
                            icon={<EditOutlined />}
                        >
                            Edit Data
                        </Button>
                        <Button
                            className="btn-success"
                            type="primary"
                            onClick={() => openModalDetail(record)}
                            icon={<FolderOutlined />}
                        >
                            Lihat Data
                        </Button>

                    </Space>
                </Row>
            ),
        },

    ];

    return (
        <LayoutSurvey title={id === "1" ? "Payakumbuah" : id === "2" ? "Solok" : id === "3" ? "Bukik Tinggi" : id === "4" ? "Padang Panjang" : null} keys={id === "1" ? "payakumbuah" : id === "2" ? "solok" : id === "3" ? "bukikTinggi" : id === "4" ? "padangPanjang" : null}>
            <Space direction="vertical" size="middle" style={{ display: "flex" }}>
                <ModalForm visible={modalForm} onCancel={() => setModalForm(false)} formType={formType} idKota={id} onFinish={onFinish} okButtonProps={{
                    form: "formPengiriman",
                    key: "submit",
                    htmlType: "submit",
                }} data={dataDetail} loading={createWilayahLoading ? createWilayahLoading : updateWilayahLoading} />
                <ModalDetail visible={modalDetail} onCancel={() => setModalDetail(false)} data={dataDetail} idKota={id} />
                <div className="function-layout" style={{
                    margin: "20px 0px",
                }}>
                    <Row justify="space-between" align="bottom">
                        <Col>
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                                size={"medium"}
                                onClick={() => openModalForm("add")}
                            >
                                Buat
                            </Button>
                        </Col>
                        <Col>
                            <Search
                                placeholder="Cari Data"
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                }}
                                allowClear
                            /></Col>
                    </Row>
                </div>
                <Spin spinning={getWilayahLoading}>

                    <Table
                        rowKey={(record, index) => index}
                        columns={columns}
                        dataSource={dataTable}
                        scroll={{
                            x: 800,
                            y: 600,
                        }}
                        style={{ marginBottom: '20px' }}
                        pagination={false}
                    />
                    {
                        getWilayahResult === null ? null : <Pagination
                            pageSize={getWilayahResult.limit}
                            current={getWilayahResult.page}
                            total={getWilayahResult.total_rows}
                            onChange={handleChange}
                            style={{ top: "0px" }}
                        />
                    }

                </Spin>
            </Space>
        </LayoutSurvey>
    )
}
