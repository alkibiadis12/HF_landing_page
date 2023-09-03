import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import countryCodes from "../../data/countryCodes";
import currencyCodes from "../../data/currencyCodes";
import toast from "react-hot-toast";
import { devices } from "../../styles/breakpoints";
import { useMediaQuery } from "@uidotdev/usehooks";

//STYLED COMPONENTS
//=================================================

const StyledSignupForm = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 2rem 0;
  position: relative;
`;

const Form = styled.form`
  border: none;
`;

const LineContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
  @media (${devices.xl}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Error = styled.div`
  font-size: 1.4rem;
  color: var(--color-red-700);
  @media (${devices.sm}) {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const CheckBoxError = styled.div`
  font-size: 1.4rem;
  color: var(--color-red-700);
  @media (${devices.xl}) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 255px;
    bottom: 4.5rem;
  }
  @media (${devices.lg}) {
    bottom: 4.7rem;
  }
  @media (${devices.md}) {
    bottom: 5rem;
  }
  @media (${devices.sm}) {
    font-size: 0.8rem;
    font-weight: 600;
    bottom: 4.5rem;
  }

  @media (${devices.mobileL}) {
    bottom: 4.3rem;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 28rem;
  height: 41px;
  @media (${devices.xl}) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 255px;
    bottom: 8rem;
  }

  @media (${devices.lg}) {
    bottom: 7rem;
  }

  @media (${devices.md}) {
    bottom: 8rem;
  }

  @media (${devices.sm}) {
    bottom: 6.2rem;
  }
`;

const CheckBox = styled.input`
  &:focus {
    outline: 0;
  }
  accent-color: var(--color-grey-0);
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

const Span = styled.span`
  display: block;
`;

//=================================================

function SignupForm() {
  const { register, formState, handleSubmit, reset, setValue, control } =
    useForm({
      defaultValues: {
        checkbox: true,
      },
    });
  const { errors } = formState;
  const isUpTo640Device = useMediaQuery("only screen and (max-width : 640px)");

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
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters long",
                },
              })}
            />
            {errors?.firstName && <Error>{errors.firstName.message}</Error>}
          </FieldContainer>

          <FieldContainer>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last Name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters long",
                },
              })}
            />
            {errors?.lastName && <Error>{errors.lastName.message}</Error>}
          </FieldContainer>

          <FieldContainer>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            {errors?.email && <Error>{errors.email.message}</Error>}
          </FieldContainer>

          <FieldContainer>
            <CheckBoxContainer>
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <CheckBox
                      type="checkbox"
                      id="checkbox"
                      {...field}
                      defaultChecked={true}
                    />
                  </>
                )}
              />
              <TermsLabel htmlFor="checkbox">
                I have read and accepted the privacy policy
                <TermsSpan>Trading Forex & CFDs is risky</TermsSpan>
              </TermsLabel>
            </CheckBoxContainer>
            {errors.checkbox && (
              <CheckBoxError>You must agree with the terms</CheckBoxError>
            )}
          </FieldContainer>
        </LineContainer>

        <LineContainer>
          <FieldContainer>
            <Select
              {...register("country", {
                required: "Country of residence is required.",
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
            {errors?.country && <Error>{errors.country.message}</Error>}
          </FieldContainer>

          <PhoneContainer>
            <FieldContainer>
              <Input
                width="7rem"
                type="text"
                id="countryCode"
                placeholder="+359"
                {...register("countryCode", {
                  required: "Country code is required",
                  validate: (value) => {
                    const isValid = countryCodes.find(
                      (country) => country.dial_code === value
                    );
                    if (!isValid) return "Invalid Dial Code";
                  },
                })}
              />
              {errors?.countryCode && (
                <Error>
                  C.Code <Span>is required</Span>
                </Error>
              )}
            </FieldContainer>

            <FieldContainer>
              <Input
                width={isUpTo640Device ? "17rem" : "20rem"}
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
                required: "Currency is required.",
              })}
            >
              {currencyCodes.map((currencyCode) => (
                <option value={currencyCode} key={currencyCode}>
                  {currencyCode}
                </option>
              ))}
            </Select>
            {errors?.currency && <Error>{errors.currency.message}</Error>}
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
