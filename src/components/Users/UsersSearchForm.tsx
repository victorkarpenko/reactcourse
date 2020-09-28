import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import c from "./Users.module.css";

type PropsType = {
    onFilterChange: (filter: FilterType) => void,
}

export const UsersSearchForm: FC<PropsType> = React.memo((props) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: any }) => {
        props.onFilterChange(values);
    };

    return (
        <div className={c.users__form}>
            <Formik
                initialValues={{term: ''}}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
});