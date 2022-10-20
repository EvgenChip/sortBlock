const array = [6, 2, 3, 1, 7, 4, 8, 5]

const sortArray = (array) => {
    let mutableArray = [...array]
    const sortArray = []

    while (mutableArray.length) {
        const minValue = Math.min(...mutableArray)
        sortArray.push(minValue)

        mutableArray = [...mutableArray.filter((num) => num !== minValue)]
    }

    return sortArray
}

const newArray = sortArray(array)

function DrawArray() {
    let wrapper = $(".blocks-wrapper");
    wrapper.html('');

    newArray.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}

DrawArray()