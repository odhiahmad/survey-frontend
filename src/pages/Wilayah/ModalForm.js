import React, { useEffect } from "react";
import {
    Modal,
    Form,
    Input,
    Select,
    Row,
    Col,
    Divider,
    Spin,
    Upload,
    notification
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
export default function ModalForm({
    visible,
    onCancel,
    formType,
    onFinish,
    okButtonProps,
    loading,
    data,
    idKota,
}) {
    const [form] = Form.useForm();
    const { Option } = Select

    const normFile = (e) => {
        let fileList = e.fileList;
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e) => {
                file.base64 = e.target.result;
            };
            reader.readAsDataURL(file.originFileObj);
        });

        return e?.fileList;
    };

    const beforeUpload = (file) => {
        const isJPG =
            file.type === "image/png" ||
            file.type === "image/jpeg" ||
            file.type === "image/jpg";

        if (!isJPG) {
            notification["warning"]({
                message: "Error",
                description: `${file.name} Bukan file gambar`,
            });
        }
        return isJPG || Upload.LIST_IGNORE;
    };

    useEffect(() => {
        if (data !== null && formType === "edit") {
            form.setFieldsValue({
                id: data.id,
                kota: idKota,
                kecamatan: data.kecamatan,
                nagari: data.nagari,
                desa: data.desa,
                jorong: data.jorong,
                dusun: data.dusun,
                rt: data.rt,
                nomorRumah: data.nomor_rumah,
                lat: data.lat,
                long: data.long,
                jumlahKeluarga: data.jumlah_keluarga,
                jumlahPenghuni: data.jumlah_penghuni,
                namaKepalaKeluarga: data.nama_kepala_keluarga,
                nomorKK: data.nomor_kk,
                statusKepemilikan: data.status_kepemilikan,
                keteranganKepemilikan: data.keterangan_kepemilikan,
                luasRumah: data.luas_rumah,
                kondisi: data.kondisi,
                jenis: data.jenis,
                keterangan: data.keterangan
            });

        } else {
            form.setFieldsValue({
                id: '',
                kota: idKota,
                kecamatan: '',
                nagari: '',
                desa: '',
                jorong: '',
                dusun: '',
                rt: '',
                nomorRumah: '',
                lat: '',
                long: '',
                jumlahKeluarga: '',
                jumlahPenghuni: '',
                namaKepalaKeluarga: '',
                nomorKK: '',
                statusKepemilikan: '',
                keteranganKepemilikan: '',
                luasRumah: '',
                kondisi: '',
                jenis: '',
                keterangan: ''

            });

        }
    });


    return (
        <Modal
            centered
            title={formType === "add" ? "Ticket Baru" : "Edit Ticket"}
            visible={visible}
            onCancel={onCancel}
            width={"80%"}
            okButtonProps={okButtonProps}
            okText="Simpan"
            maskClosable={false}
        >
            <Spin spinning={loading}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    form={form}
                    onFinish={onFinish}
                    id="formPengiriman"
                    autoComplete="off"
                >
                    <Form.Item hidden={true} name="id" initialValue={formType}>
                        <Input />
                    </Form.Item>
                    <Form.Item hidden={true} name="formType" initialValue={formType}>
                        <Input />
                    </Form.Item>
                    <Row>
                        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                            <Form.Item
                                label="Kota"
                                name="kota"
                                rules={[
                                    { required: true, message: "Tolong inputkan Caller Number!" },
                                ]}
                            >
                                <Select
                                    style={{ width: '100%' }}
                                    placeholder="Pilih Kota">
                                    <Option value="1">Payakumbuah</Option>
                                    <Option value="2">Solok</Option>
                                    <Option value="3">Bukik Tinggi</Option>
                                    <Option value="4">Padang Panjang</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Kecamatan"
                                name="kecamatan"
                                rules={[
                                    { required: true, message: "Tolong inputkan Contract Number!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Desa"
                                name="desa"
                                rules={[
                                    { required: true, message: "Tolong inputkan Customer Name!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nagari"
                                name="nagari"
                                rules={[
                                    { required: true, message: "Tolong inputkan Customer Name!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Jorong"
                                name="jorong"
                                rules={[
                                    { required: true, message: "Tolong inputkan Customer Name!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Dusun"
                                name="dusun"
                                rules={[
                                    { required: true, message: "Tolong inputkan Customer Name!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="RT"
                                name="rt"
                                rules={[
                                    { required: true, message: "Tolong inputkan RT!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nomor Rumah"
                                name="nomorRumah"
                                rules={[
                                    { required: true, message: "Tolong inputkan Customer Name!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Lat"
                                name="lat"
                                rules={[
                                    { required: true, message: "Tolong inputkan latitude!" },
                                ]}
                            >
                                <Input placeholder="1.234343443" />
                            </Form.Item>
                            <Form.Item
                                label="Long"
                                name="long"
                                rules={[
                                    { required: true, message: "Tolong inputkan longitude!" },
                                ]}
                            >
                                <Input placeholder="0.93434343" />
                            </Form.Item>

                        </Col>
                        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>

                            <Form.Item
                                label="Jumlah Keluarga"
                                name="jumlahKeluarga"
                                rules={[
                                    { required: true, message: "Tolong inputkan jumlah keluarga!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Jumlah Penghuni"
                                name="jumlahPenghuni"
                                rules={[
                                    { required: true, message: "Tolong inputkan jumlah penghuni!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nama Kepala Keluarga"
                                name="namaKepalaKeluarga"
                                rules={[
                                    { required: true, message: "Tolong inputkan nama kepala keluarga!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nomor KK"
                                name="nomorKK"
                                rules={[
                                    { required: true, message: "Tolong inputkan nomor kk!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Status Kepemilikan"
                                name="statusKepemilikan"
                                rules={[
                                    { required: true, message: "Tolong pilih status kepemilikan!" },
                                ]}
                            >
                                <Select

                                    style={{ width: '100%' }}
                                    placeholder="Pilih">
                                    <Option value="Milik Pribadi">Baik</Option>
                                    <Option value="Sewa / Kontrak">Rusak</Option>
                                </Select>

                            </Form.Item>
                            <Form.Item
                                label="Keterangan Kepemilikan"
                                name="keteranganKepemilikan"
                                rules={[
                                    { required: true, message: "Tolong inputkan keterangan kepemilikan!" },
                                ]}
                            ><Input />

                            </Form.Item>
                            <Form.Item
                                label="Luas Rumah"
                                name="luasRumah"
                                rules={[
                                    { required: true, message: "Tolong inputkan luas rumah!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Kondisi"
                                name="kondisi"
                                rules={[
                                    { required: true, message: "Tolong pilih kondisi!" },
                                ]}
                            >
                                <Select

                                    style={{ width: '100%' }}
                                    placeholder="Pilih">
                                    <Option value="Baik">Baik</Option>
                                    <Option value="Rusak">Rusak</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Jenis"
                                name="jenis"
                                rules={[
                                    { required: true, message: "Tolong pilih jenis rumah" },
                                ]}
                            >
                                <Select

                                    style={{ width: '100%' }}
                                    placeholder="Pilih">
                                    <Option value="Permanen">Permanen</Option>
                                    <Option value="Semi Permanen">Semi Permanen</Option>
                                    <Option value="Rumah Kayu">Semi Permanen</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Keterangan"
                                name="keterangan"
                                rules={[
                                    { required: true, message: "Tolong inputkan Customer Name!" },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Upload Gambar">
                                <Form.Item
                                    name="gambar"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    noStyle
                                    rules={[
                                        { required: formType === "edit" ? false : true, message: "Tolong upload gambar" },
                                    ]}
                                >
                                    <Upload.Dragger
                                        accept="image/*"
                                        name="files"
                                        maxCount={1}
                                        beforeUpload={beforeUpload}
                                    >
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">
                                            Click or drag file to this area to upload
                                        </p>
                                    </Upload.Dragger>
                                </Form.Item>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider />
                </Form>
            </Spin>

        </Modal>
    );
}
