exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor: '#d9d7ce',
        backgroundColor: '#212733',
        colors: {
            black: '#343d4a',
            red: '#f07178',
            green: '#bae67e',
            yellow: '#ffcc66',
            blue: '#36a3d9',
            magenta: '#d4bfff',
            cyan: '#95e6cb',
            white: '#c7c7c7',
            lightBlack: '#686868',
            lightRed: '#f07178',
            lightGreen: '#cbe645',
            lightYellow: '#ffdf80',
            lightBlue: '#6871ff',
            lightMagenta: '#ff77ff',
            lightCyan: '#a6fde1',
            lightWhite: '#ffffff'
        }
    });
};
