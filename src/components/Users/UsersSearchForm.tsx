import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import c from "./Users.module.css";
import controlsStyles from '../common/FormsControls/FormControls.module.css';

type PropsType = {
    onFilterChange: (filter: FilterType) => void,
}

type FormType = {
    term: string,
    friend: 'null' | 'true' | 'false'
}

export const UsersSearchForm: FC<PropsType> = React.memo((props) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: any }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        };

        props.onFilterChange(filter);
    };

    return (
        <div className={c.users__form_wrp}>
            <Formik
                initialValues={{term: '', friend: 'null'}}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form className={c.users__form}>
                        <Field type="text" name="term" className={controlsStyles.input}/>
                        <Field as="select" name="friend" className={controlsStyles.select}>
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" className={controlsStyles.button} disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
});