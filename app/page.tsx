'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import { Button, CssBaseline, Fab, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PathBlock } from './PathBlock';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function Home() {

  const paths: Path[] = [
    {
      path: "/cars",
      verbs: [
        {
          verb: 'GET',
          status: [
            { json: '{"name":"alex", "age":30, "car":null}', code: 200 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 401 },
          ]
        },
        {
          verb: 'POST',
          status: [
            { json: '{"name":"alex", "age":30, "car":null}', code: 301 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 401 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 402 },
          ]
        },
      ],

    },
    {
      path: "/users",
      verbs: [
        {
          verb: 'GET',
          status: [
            { json: '{"name":"alex", "age":30, "car":null}', code: 200 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 401 },
          ]
        },
        {
          verb: 'POST',
          status: [
            { json: '{"name":"alex", "age":30, "car":null}', code: 301 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 401 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 402 },
          ]
        },
      ],

    } ,{
      path: "/admins",
      verbs: [
        {
          verb: 'GET',
          status: [
            { json: '{"name":"alex", "age":30, "car":null}', code: 200 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 401 },
          ]
        },
        {
          verb: 'POST',
          status: [
            { json: '{"name":"alex", "age":30, "car":null}', code: 301 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 401 },
            { json: '{"name":"alex", "age":30, "car":null}', code: 402 },
          ]
        },
      ],

    }


  ]

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const pages = ['add mock', 'limpar tudo'];
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

return (
  <ThemeProvider theme={darkTheme}>

    <CssBaseline />
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Text in a modal</h2>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"

          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

          <TextField
            sx={{ display: 'block', mb: 5 }}
            id="outlined-multiline-static"
            label="response"
            multiline
            rows={4}
            fullWidth
          />
        </FormControl>

      </Box>
    </Modal>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Moxy
            </Typography>




          </Toolbar>

        </Container>

      </AppBar>

    </Box>
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      {paths.map(function (a, i) {
        return (
          <PathBlock {...a} key={i} />
        );
      })}

    </Container>
    <Fab
      onClick={handleOpen}
      color="success" sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
      }} >
      <AddIcon />
    </Fab>

  </ThemeProvider>
);
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  pathItem: Verb;
}
export interface Path  {
  path: string;
  verbs: Verb[];
}
export interface Verb  {
  verb: string;
  status: {
      json: string;
      code: number;
  }[];
}
