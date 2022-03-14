import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FileInput, ImageInput } from "formik-file-and-image-input/lib";

function CustomFileInputWrapper({ onClick, fileName }) {
  return (
    <div>
      <button onClick={onClick}>Choose File</button>
      <p>{fileName}</p>
    </div>
  );
}

function CustomImageInputWrapper({ onClick, fileName, src }) {
  return (
    <div onClick={onClick}>
      {!src && <button onClick={onClick}>Choose Image</button>}
      <img src={src} />
      <p>{fileName}</p>
    </div>
  );
}

const ImageForm = () => {
  const fileFormats = ["application/pdf"];
  const imageFormats = ["image/png", "image/svg", "image/jpeg"];
  const initialValues = {
    file: null,
    image: null,
  };

  const validationSchema = yup.shape({
    file: yup.mixed().required(),
    image: yup.mixed().required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      //   onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <FileInput
          name="file"
          validFormats={fileFormats}
          component={CustomFileInputWrapper}
        />
        <ImageInput
          name="image"
          validFormats={imageFormats}
          component={CustomImageInputWrapper}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ImageForm;
