import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Users() {
  const [data, setData] = React.useState([]);
  const [warnModal,setWornModal] = React.useState("online");
  const [open, setOpen] = React.useState(false);
  const getUsers = async () => {
    try {
      const users = await axios.get(
        `https://sig.eastus.cloudapp.azure.com/backend/user/allusers`
      );
      console.log(users.data);
      const recreateData = await users.data.map((item,i) => {
        const paylod = {
          slNo:i+1,
          id: item.id,
          name: item.firstName + " " + item.lastName,
          companyName: item.companyName,
          phoneNumber: item.phoneNumber,
        };
        return paylod;
      });
      console.log(recreateData)
      setData(recreateData);
      window.localStorage.setItem("users", JSON.stringify(recreateData));
    } catch (err) {
      console.log(err);
      setWornModal("offline")
      setOpen(true)
      let data = window.localStorage.getItem("users");
      console.log(data)
      setData(JSON.parse(data));
      // alert("Now you are in offline")
    }
  };
console.log(open)
  const rows = [];
  React.useEffect(() => {
    getUsers();
  }, [open]);
  return (
    <div style={{ height: "100vh", background: "gray", marginTop: "100px" }}>
      <div>

       {
        // warnModal === "offline" ? <div>Offline</div> : <div></div>
        warnModal === "offline" ? <Stack spacing={2} sx={{ width: '100%' }}>
        {/* <Snackbar open={navigator.onLine} autoHideDuration={6000}> */}

        <Alert severity="error">Now you are in offline</Alert>
        {/* </Snackbar> */}
        </Stack>:null
       }
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sl. No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">phone No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.slNo}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
