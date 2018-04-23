exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor: '#d9d7ce',
        backgroundColor: '#212733',
        colors: {
            black: '#686868',
            red: '#f07178',
            green: '#cbe645',
            yellow: '#ffdf80',
            blue: '#6871ff',
            magenta: '#ff77ff',
            cyan: '#a6fde1',
            white: '#ffffff',
            lightBlack: '#343d4a',
            lightRed: '#f07178',
            lightGreen: '#bae67e',
            lightYellow: '#ffcc66',
            lightBlue: '#36a3d9',
            lightMagenta: '#d4bfff',
            lightCyan: '#95e6cb',
            lightWhite: '#c7c7c7'
        }
    });
};
