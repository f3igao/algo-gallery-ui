import { Field, FieldArray, Form, Formik } from 'formik';
import { FunctionComponent } from 'react';
interface CreateProps {}

const initialValues = {
  collaborators: [
    {
      address: 'address',
      split: 0,
    },
  ],
};

const Create: FunctionComponent<CreateProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name='collaborators'>
            {({ remove, push }) => (
              <div>
                {values.collaborators.length > 0 &&
                  values.collaborators.map((collaborator, index) => (
                    <div key={index}>
                      <Field
                        className='w5'
                        name={`collaborators.${index}.address`}
                        placeholder={collaborator.address}
                        type='text'
                      />
                      <Field
                        className='w3 mh3'
                        name={`collaborators.${index}.split`}
                        placeholder={collaborator.split}
                        type='number'
                      />
                      <button
                        type='button'
                        className='secondary'
                        onClick={() => remove(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                <button
                  type='button'
                  className='secondary'
                  onClick={() => push({ address: '', split: 0 })}
                >
                  Add Collaborator
                </button>
              </div>
            )}
          </FieldArray>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Create;
