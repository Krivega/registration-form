import React from 'react';
import Field from 'components/Field';
import PhoneField from 'components/PhoneField';
import Grid from 'components/Grid';
import CountrySelect from 'components/CountrySelect';
import Cell from 'components/Cell';
import Button from 'components/Button';
import AutocompleteProfession from 'containers/AutocompleteProfession';
import { resolveActionHandler } from 'resolvers/actions';

const mapCountries = {
  RU: '7',
  CN: '86',
  DE: '49',
  FR: '33',
  UK: '44'
};

const countries = Object.keys(mapCountries);

const phoneCodeToCountry = code => {
  let result;

  for (const country in mapCountries) {
    if (`+${mapCountries[country]}` === code) {
      result = country;
      break;
    }
  }

  return result;
};

const countryToPhoneCode = country => {
  return `+${mapCountries[country]}`;
};

export default class RegistrationForm extends React.PureComponent {
  renderHeadText() {
    const style = { textAlign: 'center', marginBottom: '40px' };

    return (
      <p style={style}>
        <b>Зарегистрируйтесь</b> и начните продавать<br />услуги через интернет сегодня
      </p>
    );
  }

  renderRegisterButton() {
    const style = { textAlign: 'center', marginTop: '40px' };

    return (
      <div style={style}>
        <Button primary>Зарегистрироваться</Button>
      </div>
    );
  }

  render() {
    const {
      firstName,
      lastName,
      profession,
      phoneCode,
      phoneNumber,
      onChangeFirstName,
      onChangeLastName,
      onChangeProfession,
      onChangePhoneCode,
      onChangePhoneNumber
    } = this.props;

    const handleCountrySelect = resolveActionHandler(onChangePhoneCode)(countryToPhoneCode);

    return (
      <form>
        {this.renderHeadText()}
        <Grid>
          <Cell equal>
            <Field label="ИМЯ" id="firstName" value={firstName} onChange={onChangeFirstName} />
          </Cell>
          <Cell equal>
            <Field label="ФАМИЛИЯ" id="lastName" value={lastName} onChange={onChangeLastName} />
          </Cell>
        </Grid>
        <Field label="ПРОФЕССИЯ" id="profession" value={profession} onChange={onChangeProfession} />
        <AutocompleteProfession />
        <PhoneField
          label="ТЕЛЕФОН"
          id="phoneNumber"
          phoneCode={phoneCode}
          value={phoneNumber}
          onChange={onChangePhoneNumber}
        >
          <CountrySelect
            countries={countries}
            value={phoneCodeToCountry(phoneCode)}
            onSelect={handleCountrySelect}
          />
        </PhoneField>
        {this.renderRegisterButton()}
      </form>
    );
  }
}
