import {
  ArrayHelpers,
  ErrorMessage,
  Field,
  FieldArray,
  FormikProvider,
  useFormik,
} from 'formik';
import { Fragment, FunctionComponent } from 'react';
import * as Yup from 'yup';

interface CreateProps {}

const collaboratorsValues = {
  collaborators: [
    {
      address: '',
      split: 0,
    },
  ],
};

const collaboratorsSchema = Yup.object().shape({
  collaborators: Yup.array()
    .of(
      Yup.object().shape({
        address: Yup.string()
          .min(2, 'Too Short')
          .max(50, 'Too Long')
          .required('Required'),
        split: Yup.number()
          .integer('Integer')
          .lessThan(100, 'Too Large')
          .moreThan(0, 'Too Small')
          .required('Required'),
      })
    )
    .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
    .min(3, 'Minimum of 3 friends'),
});

// const FieldErrorMessage = ({ name }: any) => (
//   <Field
//     name={name}
//     render={({ form }: any) => {
//       const error = getIn(form.errors, name);
//       const touch = getIn(form.touched, name);
//       return touch && error ? error : null;
//     }}
//   />
// );

const Create: FunctionComponent<CreateProps> = () => {
  const formik = useFormik({
    initialValues: collaboratorsValues,
    validationSchema: collaboratorsSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-between">
      <span>Instructions XYZ</span>
      <FormikProvider value={formik}>
        <div className="flex flex-column w-50">
          <FieldArray name="collaborators">
            {({ remove, insert }: ArrayHelpers) => (
              <Fragment>
                {formik.values.collaborators?.map((_, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="flex flex-column w-60">
                      <Field
                        name={`collaborators.${index}.address`}
                        placeholder={`Collaborator ${index + 1} wallet address`}
                        type="text"
                      />
                      <ErrorMessage name={`collaborators.${index}.address`} />
                    </div>
                    <div className="flex flex-column w-30 mh3">
                      <Field
                        name={`collaborators.${index}.split`}
                        type="number"
                      />
                      <ErrorMessage name={`collaborators.${index}.split`} />
                    </div>
                    <div>
                      {' '}
                      <button
                        disabled={formik.values.collaborators.length >= 10}
                        type="button"
                        onClick={() =>
                          insert(index + 1, { address: '', split: 0 })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        disabled={formik.values.collaborators.length <= 1}
                        type="button"
                        onClick={() => remove(index)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
              </Fragment>
            )}
          </FieldArray>
          <div className="mt2 tr">
            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
              Submit
            </button>
          </div>
        </div>
      </FormikProvider>
    </div>
  );
};

export default Create;
