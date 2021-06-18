import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { Form, Message, Button } from 'semantic-ui-react';
import JobAdvertisementsService from '../services/jobAdvertisementsService';



export default function AddJobAdvertisement() {

    let jobAdvertService = new JobAdvertisementsService();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleReset,
        handleBlur,
        dirty,
        isSubmitting,
        touched,

    } = useFormik({
        initialValues: {
            companyName: "",
            jobDescription: "",
            minSalary: "",
            maxSalary: "",
            jobPosition: "",
            cityName: ""
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required("Şirket Adı Boş Kalamaz."),
            jobDescription: Yup.string().required("İş Açıklaması Boş Kalamaz."),
            minSalary: Yup.number().required("Maaş Bilgileri Boş Kalamaz"),
            maxSalary: Yup.number().required("Maaş Bilgileri Boş Kalamaz"),
            jobPosition: Yup.string().required("İş İsmi Boş Kalamaz."),
            cityName: Yup.string().required("Şehir Bilgisi Boş Kalamaz")
        }),
        onSubmit: (values) => {
            let jobAdvertService = new JobAdvertisementsService();
            jobAdvertService.addJobAdvertisements(values).then();
        },

    });


    return (
        <div>

<Form onSubmit={handleSubmit}>
            
            </Form>
            <Form onSubmit={handleSubmit} style={{ marginTop: "5em" }}>
                <Form.Field >
                    <label>İş İsmi:</label>
                    <input
                        name="jobPosition"
                        placeholder="İş Adı"
                        value={values.jobPosition}
                        onChange={handleChange}
                    />
                    {errors.jobPosition && touched.jobPosition && (
                        <Message color="red">{errors.jobPosition}</Message>
                    )}
                </Form.Field>

               

                <Form.Field>
                    <label>Şirket Adı:</label>
                    <input
                        name="companyName"
                        placeholder="Şirket Adı"
                        value={values.companyName}
                        onChange={handleChange}
                    />
                    {errors.companyName && touched.companyName && (
                        <Message color="red">{errors.companyName}</Message>
                    )}
                </Form.Field>
                <Form.Field>
                    <label>Şehir Bilgisi:</label>
                    <input
                        name="cityName"
                        placeholder="Şehir Bilgisi"
                        value={values.cityName}
                        onChange={handleChange}
                    />
                    {errors.cityName && touched.cityName && (
                        <Message color="red">{errors.cityName}</Message>
                    )}
                </Form.Field>

                <Form.Field>
                    <label>Minimum Maaş:</label>
                    <input
                        name="minSalary"
                        placeholder="Minimum Maaş"
                        value={values.minSalary}
                        onChange={handleChange}
                    />
                    {errors.minSalary && touched.minSalary && (
                        <Message color="red">{errors.minSalary}</Message>
                    )}
                </Form.Field>
                <Form.Field>
                    <label>Maksimum Maaş:</label>
                    <input
                        name="maxSalary"
                        placeholder="Maksimium Maaş"
                        value={values.maxSalary}
                        onChange={handleChange}
                    />
                    {errors.maxSalary && touched.maxSalary && (
                        <Message color="red">{errors.maxSalary}</Message>
                    )}
                </Form.Field>
                <Form.Field>
                    <label>İş Açıklaması:</label>
                    <input
                        name="jobDescription"
                        placeholder="İş Açıklaması"
                        value={values.jobDescription}
                        onChange={handleChange}
                    />
                    {errors.jobDescription && touched.jobDescription && (
                        <Message color="red">{errors.jobDescription}</Message>
                    )}
                </Form.Field>
                <Form.Field >
                <select
                        name="times"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: "block" }}
                    >
                        <option value="" label="Çalışma Şekli">
                            Select a color{" "}
                        </option>
                        <option value="Evden" label="Evden">
                            {" "}
                            Evden
                        </option>
                        <option value="Uzaktan" label="uzaktan">
                            uzaktan
                        </option>
        
                        
                    </select>


                </Form.Field>

                <Form.Field  >
                <select
                        name="times"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: "block" }}
                    >
                        <option value="" label="Zaman seçiniz">
                            Select a color{" "}
                        </option>
                        <option value="tam zamanlı" label="tam zamanlı">
                            {" "}
                            tam zamanlı
                        </option>
                        <option value="yarı zamanlı" label="yarı zamanlı">
                            yarı zamanlı
                        </option>
        
                        
                    </select>


                </Form.Field>
                <Button icon="add" type="submit">İş Ekle</Button>
            </Form>


            
            
        </div>
    )
}
