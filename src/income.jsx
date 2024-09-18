import {Box, Card, Divider, Chip, Typography} from '@mui/joy';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import PropTypes from 'prop-types';

function PercentageIndicator({ value }) {
    const isPositive = value >= 0;
    return (
        <Box display="inline-flex" alignItems="center" color={isPositive ? 'green' : 'red'}>
            {isPositive ? <ArrowUpward sx={{ml:"0.2rem"}}/> : <ArrowDownward sx={{ml:"0.2rem"}}/>}
            <Typography variant="caption" color={isPositive ? 'green' : 'red'} fontWeight="normal">
                {Math.abs(value)}%
            </Typography>
        </Box>
    );
}
PercentageIndicator.propTypes = {
    value: PropTypes.number.isRequired,
};

export function DefaultMonth() {
    return (
        <Chip>
            Default month is current month
        </Chip>
    );
}
export default function Income() {
    return (
        <Card sx={{ width: 300, backgroundColor:"success.main" }} >
            <Box display="inline-flex" justifyContent="space-between">
                <Typography level="body-sm" fontWeight="Bold">
                    Income
                </Typography>
                <DefaultMonth />
            </Box>
            <Divider />
            <Box display="inline-flex" alignItems="center" >
                <Typography level="title-lg" fontWeight="Bold">
                    ETB 9460.00 
                </Typography>
                <PercentageIndicator variant="caption" value = {-1.5}/>
            </Box>
            <Box>
                <Typography level="body-sm" fontWeight="normal">
                    <Box>
                        Compared to ETB 9440 last month
                    </Box>
                    <Box sx={{ fontWeight:"Bold" }}>
                        Last month income (Val-Last-M)
                    </Box>
                </Typography>
            </Box>        
        </Card>
    );
}
