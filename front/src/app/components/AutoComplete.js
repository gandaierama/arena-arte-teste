import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.body}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            {option.body} ({option.title}) +{option.id}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          body="Digite um title"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { title: 'AD', body: 'Andorra', id: '376' },
  {
    title: 'AE',
    body: 'United Arab Emirates',
    id: '971',
  },
  { title: 'AF', body: 'Afghanistan', id: '93' },
  { title: 'ZW', body: 'Zimbabwe', id: '263' },
];