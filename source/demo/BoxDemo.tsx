import React from 'react';
// @ts-ignore;
import {Box, Text} from 'ink';

export default class BoxDemo extends React.Component {
    render() {
        return <>
            {/* <Box margin={2}>
                <Text>This is a box with margin;</Text>
            </Box>
            <Box width={10}>
                <Box width="50%">
                    <Text>WX</Text>
                </Box>
                <Text>WY</Text>
            </Box>
            <Box height={4}>
                <Text>H</Text>
            </Box>
            <Box height={6} flexDirection="column">
                <Box height="50%">
                    <Text>HX</Text>
                </Box>
                <Text>HY</Text>
            </Box> */}

            {/* <Box paddingTop={2}><Text>Top</Text></Box>
            <Box paddingBottom={2}><Text>Bottom</Text></Box>
            <Box paddingLeft={2}><Text>Left</Text></Box>
            <Box paddingRight={2}><Text>Right</Text></Box>
            <Box paddingX={2}><Text>Left and right</Text></Box>
            <Box paddingY={2}><Text>Top and bottom</Text></Box>
            <Box padding={2}><Text>Top, bottom, left and right</Text></Box> */}

            <Box flexDirection="column">
                <Box>
                    <Box borderStyle="single" marginRight={2}>
                        <Text>single</Text>
                    </Box>

                    <Box borderStyle="double" marginRight={2}>
                        <Text>double</Text>
                    </Box>

                    <Box borderStyle="round" marginRight={2}>
                        <Text>round</Text>
                    </Box>

                    <Box borderStyle="bold">
                        <Text>bold</Text>
                    </Box>
                </Box>

                <Box marginTop={1}>
                    <Box borderStyle="singleDouble" marginRight={2}>
                        <Text>singleDouble</Text>
                    </Box>

                    <Box borderStyle="doubleSingle" marginRight={2}>
                        <Text>doubleSingle</Text>
                    </Box>

                    <Box borderStyle="classic">
                        <Text>classic</Text>
                    </Box>
                </Box>
            </Box>
            <Box borderStyle="round" borderColor="green" width={20}>
                <Text>Green Rounded Box</Text>
            </Box>
        </>
    }
}
