const dealNum = (num, type) => {
    if (num === '') {
        return ''
    } else {
        if (type === '%') {
            return num.toFixed(2) * 100 + '';
        } else {
            if (Math.floor(num) === num) {
                return num + '';
            } else {
                return num.toFixed(1) * 1 + '';
            }
        }
    }
};

export default dealNum;