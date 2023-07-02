'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { TabPanelProps } from './page';
import { Button, FormControlLabel, Slide, Switch, TextField, Zoom } from '@mui/material';

export function TabPanel(props: TabPanelProps) {
  const { value, index, pathItem} = props;
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: boolean) => {
    setChecked(newValue);
  };
  
  return (
  <Zoom in={value === index} style={{ transitionDelay: checked ? '50ms' : '0ms' }}>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    
    > 
      {value === index && (
        <Box sx={{ p: 3 }}>
          <FormControlLabel sx={{ mb: 2 }} control={<Switch checked={checked}
             onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }} />} label="use mock" />


          {pathItem.status.map(function (a, i) {
            return (
              <TextField
                key={a.code.toString()}
                sx={{ display: 'block', mb: 5 }}
                id="outlined-multiline-static"
                label={a.code.toString()}
                multiline
                rows={4}
                defaultValue={a.json}
                fullWidth
              />
            );
          })}
        </Box>
      )}
    </div>
    </Zoom>
  );
}
