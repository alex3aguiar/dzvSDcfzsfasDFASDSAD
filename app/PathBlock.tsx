'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Fab, FormControlLabel, Switch, Tab, Tabs } from '@mui/material';
import { TabPanel } from './TabPanel';
import { Path } from './page';

export function PathBlock(pathItem: Path) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ border: 1, borderColor: 'divider', mt: 5, boxShadow: 5, bgcolor: '#000000' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between',mt: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
          {pathItem.path}
        </Typography>
      </Box>


      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example" value={value} onChange={handleChange}>
          {pathItem.verbs.map(function (a, i) {
            return (
              <Tab label={a.verb} key={a.verb} />
            );
          })}
        </Tabs>

      </Box>

      {pathItem.verbs.map(function (a, i) {
        return (
          <TabPanel pathItem={a} value={value} index={i} key={i}>

          </TabPanel>
        );
      })}

    </Box>);
}


