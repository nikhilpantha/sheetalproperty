import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  friends: [
    {
      title: "",
      value: "",
    },
  ],
};
const FormArray = () => {
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
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div
                      className="grid grid-cols-3 gap-5 items-end mb-5"
                      key={index}
                    >
                      <div className="flex-col flex space-y-2">
                        <label htmlFor={`friends.${index}.name`}>Title</label>
                        <Field
                          name={`friends.${index}.name`}
                          placeholder="Eg.Equipment"
                          type="text"
                          className="p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="flex-col flex space-y-2">
                        <label htmlFor={`friends.${index}.email`}>Value</label>
                        <Field
                          name={`friends.${index}.email`}
                          placeholder="Grill-Gas"
                          type="text"
                          className="p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary p-2 border border-gray-300 rounded px-4 "
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary mt-10 text-white bg-red-700 px-5 py-2 rounded"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add More
                </button>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default FormArray;
