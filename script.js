const getMean = (array) => {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};

const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
};