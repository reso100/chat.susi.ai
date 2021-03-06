import React from 'react';
import Translate from '../../Translate/Translate.react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import ThemeChanger from './ThemeChanger';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ThemeChangeTab = props => {
  return (
    <div style={props.containerStyle}>
      <span>
        <div style={props.tabHeadingStyle}>
          <Translate text="Select Theme" />
        </div>
        {props.theme === 'light' ? (
          <hr className="break-line-light" style={{ height: '2px' }} />
        ) : (
          <hr className="break-line-dark" />
        )}
      </span>
      <RadioGroup
        style={{ textAlign: 'left', margin: 20 }}
        onChange={props.handleSelectChange}
        name="Theme"
        value={props.theme}
      >
        <FormControlLabel
          value="light"
          control={<Radio color="primary" />}
          label={<Translate text="Light" />}
        />
        <FormControlLabel
          value="dark"
          control={<Radio color="primary" />}
          label={<Translate text="Dark" />}
        />
        <FormControlLabel
          value="custom"
          control={<Radio color="primary" />}
          label={<Translate text="Custom" />}
        />
      </RadioGroup>
      <Button
        disabled={props.theme !== 'custom'}
        onClick={props.handleThemeChanger}
        variant="contained"
        color="primary"
      >
        <Translate text="Edit theme" />
      </Button>
      <ThemeChanger
        themeOpen={props.themeOpen}
        onRequestClose={() => props.onThemeRequestClose}
      />
    </div>
  );
};

ThemeChangeTab.propTypes = {
  containerStyle: PropTypes.object,
  handleSelectChange: PropTypes.func,
  handleThemeChanger: PropTypes.func,
  radioIconStyle: PropTypes.object,
  theme: PropTypes.string,
  themeForegroundColor: PropTypes.string,
  themeVal: PropTypes.string,
  onThemeRequestClose: PropTypes.func,
  isLoggedIn: PropTypes.string,
  themeOpen: PropTypes.bool,
  tabHeadingStyle: PropTypes.object,
};

export default ThemeChangeTab;
