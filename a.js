
// POPUP

// get popup elements
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');
const viewModalBtn = document.querySelector('.view-modal1');

// get form elements
const inputNumber = document.querySelector('#input-number');
const submitBtn = document.querySelector('#submit-btn');
const productTable = document.querySelector('#product-table tbody');
const total = document.querySelector('#total');

inputNumber.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
    event.preventDefault();
    submitBtn.click();
    }
    });

// open popup when view modal button is clicked
viewModalBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// close popup when close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// close popup when user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});

// function to calculate product price
function calculatePrice(number, multiplier) {
    return number * multiplier;
}

// function to generate table row
function generateTableRow(product, price, rowNumber) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${product} ${rowNumber}</td>
    <td class="price">${price} GEL</td>
    <td><button class="disable">გაუქმება</button></td>
  `;
    const disableBtn = tr.querySelector('.disable');
    disableBtn.addEventListener('click', () => {
        tr.classList.toggle('disabled');
        if (tr.classList.contains('disabled')) {
            disableBtn.textContent = 'დამატება';
            disableBtn.style.backgroundColor = '#4CAF50';
        } else {
            disableBtn.textContent = 'გაუქმება';
            disableBtn.style.backgroundColor = '';
        }
        // recalculate total
        let totalSum = 0;
        const rows = productTable.querySelectorAll('tr:not(:first-child)');
        rows.forEach((row) => {
            if (!row.classList.contains('disabled')) {
                const priceCell = row.querySelector('.price');
                const price = parseFloat(priceCell.textContent);
                totalSum += price;
            }
        });
        total.textContent = `${totalSum} GEL`;
    });
    return tr;
}

// generate table rows when user submits form
submitBtn.addEventListener('click', () => {
    // remove existing table rows
    while (productTable.firstChild) {
        productTable.removeChild(productTable.firstChild);
    }
    // calculate and generate new table rows
    let totalSum = 0;
    for (let i = 1; i <= 8; i++) {
        const product = 'პროდუქტი';
        const price = calculatePrice(inputNumber.value, i);
        const tr = generateTableRow(product, price, i);
        productTable.appendChild(tr);
        totalSum += price;
    }
    // update total
    total.textContent = `${totalSum} GEL`;
});
console.log(productTable.firstChild);