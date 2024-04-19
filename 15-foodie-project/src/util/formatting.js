// this is currency formatting function, used this to show the $ symbol in before the price
export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style : 'currency',
    currency : 'USD'
})