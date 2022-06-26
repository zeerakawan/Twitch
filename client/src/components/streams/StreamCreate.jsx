import { Field, reduxForm } from "redux-form";

const StreamCreate = ({ ...props }) => {
  // render the form input values
  const renderInput = ({ label, input, meta }) => {
    // to turn the error field red as well along with the error message
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (submitState) => {
    console.log(submitState);
  };

  // generate an error message below to the field
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
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

// to validate the fields and store the error into state
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
