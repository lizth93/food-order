import useInput from "../hooks/use-input";
import "../Cart/Checkout.css";
import useClassName from "../hooks/use-classname";

const Checkout = (props) => {
  const validateTextInputs = (value) => value.trim() !== "";
  const validatePostalInput = (value) => value.trim().length === 5;

  const {
    value: name,
    isValid: isValidName,
    hasError: hasErrorName,
    inputChangeHandler: handleNameInput,
    inputOnBlurHandler: handleNameInputBlur,
    reset: resetNameInput,
  } = useInput(validateTextInputs);

  const {
    value: streetInput,
    isValid: isValidStreet,
    hasError: hasErrorStreet,
    inputChangeHandler: streetInputHandler,
    inputOnBlurHandler: streetOnBlurHandler,
    reset: resetStreetInput,
  } = useInput(validateTextInputs);

  const {
    value: postalInput,
    isValid: isValidPostal,
    hasError: hasErrorPostal,
    inputChangeHandler: postalInputHandler,
    inputOnBlurHandler: postalOnBlurHandler,
    reset: resetPostalInput,
  } = useInput(validatePostalInput);

  const {
    value: cityInput,
    isValid: isValidCity,
    hasError: hasErrorCity,
    inputChangeHandler: cityInputHandler,
    inputOnBlurHandler: cityOnBlurHandler,
    reset: resetCityInput,
  } = useInput(validateTextInputs);

  const formIsValid =
    isValidName && isValidStreet && isValidPostal && isValidCity;

  const confirmHandler = (event) => {
    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      street: streetInput,
      city: cityInput,
      postalCode: postalInput,
    });

    event.preventDefault();
    resetNameInput();
    resetStreetInput();
    resetPostalInput();
    resetCityInput();
  };

  const nameClassResult = useClassName(hasErrorName);
  const streetClassResult = useClassName(hasErrorStreet);
  const postalClassName = useClassName(hasErrorPostal);
  const cityClassName = useClassName(hasErrorCity);

  return (
    <form className="form" onSubmit={confirmHandler}>
      <div className={nameClassResult}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameInput}
          onBlur={handleNameInputBlur}
          value={name}
        />
        {hasErrorName && <p>Please enter your name</p>}
      </div>
      <div className={streetClassResult}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetInputHandler}
          onBlur={streetOnBlurHandler}
          value={streetInput}
        />
        {hasErrorStreet && <p>Please enter a valid Street</p>}
      </div>
      <div className={postalClassName}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalInputHandler}
          onBlur={postalOnBlurHandler}
          value={postalInput}
        />
        {hasErrorPostal && <p>Please enter a valid Postal number</p>}
      </div>
      <div className={cityClassName}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityInputHandler}
          onBlur={cityOnBlurHandler}
          value={cityInput}
        />
        {hasErrorCity && <p>Please enter a valid City</p>}
      </div>
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit" disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
