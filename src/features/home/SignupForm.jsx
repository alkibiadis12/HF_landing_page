import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import countryCodes from "../../data/countryCodes";
import currencyCodes from "../../data/currencyCodes";
import toast from "react-hot-toast";

//STYLED COMPONENTS
//=================================================

const StyledSignupForm = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 2rem 0;
`;

const Form = styled.form`
  border: none;
`;

const LineContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Error = styled.div`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const CheckBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 28rem;
  height: 41px;
`;

const CheckBox = styled.input`
  &:focus {
    outline: 0;
  }
`;

const TermsLabel = styled.label`
  font-size: 1.2rem;

  align-self: flex-end;
  color: var(--color-grey-500);
`;

const TermsSpan = styled.span`
  display: block;
`;

const PhoneContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

//=================================================

function SignupForm() {
  const { register, formState, handleSubmit, reset, setValue, control } =
    useForm({
      defaultValues: {
        checkbox: false,
      },
    });
  const { errors } = formState;

  function onSubmit({
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
    countryCode,
    currency,
  }) {
    const PhoneNumberWithCountryCode =
      countryCode + phoneNumber.replace(/\s+/g, "");

    console.log(
      `firstName: ${firstName}
      \nlastName: ${lastName}
      \nemail: ${email}
      \ncountry: ${country}
      \nphoneNumber: ${PhoneNumberWithCountryCode}
      \ncurrency: ${currency}\n`
    );
    toast.success(
      "You have successfully registered! Please check the console!"
    );
    reset();
  }

  function handleCountryChange(event) {
    const countryValue = event.target.value;
    const selectedCountry = countryCodes.find(
      (country) => country.name === countryValue
    );

    if (selectedCountry) {
      setValue("countryCode", selectedCountry.dial_code);
    } else {
      setValue("countryCode", "");
    }
  }

  return (
    <StyledSignupForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LineContainer>
          <FieldContainer>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors?.firstName && <Error>First name is required.</Error>}
          </FieldContainer>

          <FieldContainer>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors?.lastName && <Error>Last name is required.</Error>}
          </FieldContainer>

          <FieldContainer>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            {errors?.email && <Error>Email is required.</Error>}
          </FieldContainer>

          <FieldContainer>
            <CheckBoxContainer>
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <CheckBox type="checkbox" id="checkbox" {...field} />
                  </>
                )}
              />
              <TermsLabel htmlFor="checkbox">
                I have read and accepted the privacy policy
                <TermsSpan>Trading Forex & CFDs is risky</TermsSpan>
              </TermsLabel>
            </CheckBoxContainer>
            {errors.checkbox && <Error>You must agree with the terms</Error>}
          </FieldContainer>
        </LineContainer>

        <LineContainer>
          <FieldContainer>
            <Select
              {...register("country", {
                required: "This field is required",
              })}
              onChange={(e) => handleCountryChange(e)}
            >
              <option value="">Country of Residence</option>
              {countryCodes.map((countryCode) => (
                <option value={countryCode.name} key={countryCode.code}>
                  {countryCode.name}
                </option>
              ))}
            </Select>
            {errors?.country && (
              <Error>Country of residence is required.</Error>
            )}
          </FieldContainer>

          <PhoneContainer>
            <FieldContainer>
              <Input
                width="7rem"
                type="text"
                id="countryCode"
                placeholder="+359"
                {...register("countryCode", {
                  required: "This field is required",
                  validate: (value) => {
                    const isValid = countryCodes.find(
                      (country) => country.dial_code === value
                    );
                    if (!isValid) return "Invalid Dial Code";
                  },
                })}
              />
              {errors?.countryCode && <Error>Country code is required.</Error>}
            </FieldContainer>

            <FieldContainer>
              <Input
                width="20rem"
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "This field is required",
                  validate: (value) => {
                    return (
                      value.match(/\d/g).length === 10 ||
                      "Phone Number must contain 10 digits."
                    );
                  },
                })}
              />
              {errors?.phoneNumber && <Error>Phone number is required.</Error>}
            </FieldContainer>
          </PhoneContainer>

          <FieldContainer>
            <Select
              {...register("currency", {
                required: "This field is required.",
              })}
            >
              {currencyCodes.map((currencyCode) => (
                <option value={currencyCode} key={currencyCode}>
                  {currencyCode}
                </option>
              ))}
            </Select>
            {errors?.currency && <Error>Currency is required.</Error>}
          </FieldContainer>

          <FieldContainer>
            <Button>REGISTER NOW</Button>
          </FieldContainer>
        </LineContainer>
      </Form>
    </StyledSignupForm>
  );
}

export default SignupForm;
