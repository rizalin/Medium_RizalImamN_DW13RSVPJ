import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1b1b1b',
    },
})(Tabs);

const AntTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        minWidth: 30,
        maxWidth: '40',
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(0),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#1b1b1b',
            opacity: 1,
        },
        '&$selected': {
            color: '#292929',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#1b1b1b',
        },
    },
    selected: {},
}))(props => <Tab disableRipple {...props} />);



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
        padding: '0px'
    },
    padding: {
        padding: theme.spacing(0),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#1b1b1b',
    },
}));

export default function ArticleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="Profile" />
                    <AntTab label="Claps" />
                    <AntTab label="Highlights" />
                    <AntTab label="Responses" />
                </AntTabs>
                <Typography className={classes.padding} />
            </div>

        </div>
    );
}