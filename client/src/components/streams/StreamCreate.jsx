import { Field, reduxForm } from "redux-form";

const StreamCreate = ({ ...props }) => {
  const renderInput = ({ label, input, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  };

  const onSubmit = (submitState) => {
    console.log(submitState);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (submitState) => {
  const errors = {};

  if (!submitState.title) {
    errors.title = "You must enter a title";
  }

  if (!submitState.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
