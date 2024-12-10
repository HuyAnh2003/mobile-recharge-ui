
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
// import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import { BarChart } from "@mui/x-charts";

import { ErrorCodes } from "~/utils/Common/Message";
import { RECHARGE_PHONE_STATIC_API } from "~/apis/RechargeOnlineAPI";
import { formatCurrency, formatDate, searchByDate } from "~/utils/Common/Format";
import { validateDate } from "~/utils/Common/ValidData";

const AdminRechargePhone = () => {

    const [day, setDay] = useState('');
    const [rows, setRows] = useState([]);

    const handleSearchData = () => {
        if (!validateDate(day)) {
            toast.info(ErrorCodes.INVALID_DATA_FORMAT.message);
        } else {
            setRows(searchByDate(rows, day));
        }
    }  

    const fetchRechargeOnline = async () => {
        try {
            const res = await RECHARGE_PHONE_STATIC_API();
            if (res[0]) {
                setRows(res);
            }
        } catch (error) {
            console.log(error);
            toast.error(ErrorCodes.SERVER_ERROR.message); // Thông báo lỗi khi gọi API
        }
    }

    useEffect(() => {
        fetchRechargeOnline();
    }, []);

    return (
        <Box sx={{ mx: 20 }}>
            <Typography variant="h5" sx={{ color: 'gray' }}>
                Manage Recharge Phone
            </Typography>

            {/* <Box sx={{ my: 10, display: 'flex', justifyContent: 'center' }}>
                <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    series={[
                        { dataKey: 'london', label: 'London', valueFormatter },
                        { dataKey: 'paris', label: 'Paris', valueFormatter },
                        { dataKey: 'newYork', label: 'New York', valueFormatter },
                        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
                    ]}
                    {...chartSetting}
                />
            </Box> */}

            <Box sx={{mt: 5}}>
                <Typography variant='h6' sx={{fontWeight: 'bold', color: 'gray'}}>Search</Typography>
                <Box>
                    <TextField variant="standard" placeholder='Enter a date' sx={{width: '20%'}}
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    />
                    <Button variant="outlined" sx={{mx: 5}} onClick={handleSearchData}>Search</Button>
                </Box>
            </Box>

            <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>ID</TableCell>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>ID User</TableCell>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>ID Guest</TableCell>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>Amount</TableCell>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>Date Top Up</TableCell>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>Status</TableCell>
                                <TableCell sx={{color: 'gray', fontWeight: 'bold', fontSize: '22px'}}>Number Phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.rechargeId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.rechargeId}
                                </TableCell>
                                <TableCell >{row.userId}</TableCell>
                                <TableCell >{row.guestIdentifier}</TableCell>
                                <TableCell >{formatCurrency(row.amount)}</TableCell>
                                <TableCell >{formatDate(row.rechargeDate)}</TableCell>
                                <TableCell >{row.status}</TableCell>
                                <TableCell >{row.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

// const chartSetting = {
//     yAxis: [
//         {
//             label: 'rainfall (mm)',
//         },
//     ],
//     width: 1200,
//     height: 400,
//     sx: {
//         [`.${axisClasses.left} .${axisClasses.label}`]: {
//             transform: 'translate(-20px, 0)',
//         },
//     },
// };

// const dataset = [
//     {
//         london: 59,
//         paris: 57,
//         newYork: 86,
//         seoul: 21,
//         month: 'Jan',
//     },
//     {
//         london: 50,
//         paris: 52,
//         newYork: 78,
//         seoul: 28,
//         month: 'Feb',
//     },
//     {
//         london: 47,
//         paris: 53,
//         newYork: 106,
//         seoul: 41,
//         month: 'Mar',
//     },
//     {
//         london: 54,
//         paris: 56,
//         newYork: 92,
//         seoul: 73,
//         month: 'Apr',
//     },
//     {
//         london: 57,
//         paris: 69,
//         newYork: 92,
//         seoul: 99,
//         month: 'May',
//     },
//     {
//         london: 60,
//         paris: 63,
//         newYork: 103,
//         seoul: 144,
//         month: 'June',
//     },
//     {
//         london: 59,
//         paris: 60,
//         newYork: 105,
//         seoul: 319,
//         month: 'July',
//     },
//     {
//         london: 65,
//         paris: 60,
//         newYork: 106,
//         seoul: 249,
//         month: 'Aug',
//     },
//     {
//         london: 51,
//         paris: 51,
//         newYork: 95,
//         seoul: 131,
//         month: 'Sept',
//     },
//     {
//         london: 60,
//         paris: 65,
//         newYork: 97,
//         seoul: 55,
//         month: 'Oct',
//     },
//     {
//         london: 67,
//         paris: 64,
//         newYork: 76,
//         seoul: 48,
//         month: 'Nov',
//     },
//     {
//         london: 61,
//         paris: 70,
//         newYork: 103,
//         seoul: 25,
//         month: 'Dec',
//     },
// ];

// function valueFormatter(value) {
//     return `${value}mm`;
// }

export default AdminRechargePhone;