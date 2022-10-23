const menu = {
    _meal : "",
    _prices: 0,

    set meal(mealToCheck){
        if (typeof mealToCheck === "string"){
            this._meal = mealToCheck;
            return mealToCheck
        }
        else {
            console.log("You most pust a string ")
        }
    },

    set price(priceToCheck){
        if (typeof priceToCheck !== 'number'){
            console.log('You most put a number')
        }
        else {
            this._prices = priceToCheck;

            return priceToCheck
        }
    },
    get todaysSpecial(){
        if (this._meal && this._prices){
            return `Today spaial is ${this._meal} and the prices is ${this._prices}`
        }

        else{
            return 'Meal or price was not set correctly!'
        }
    }
}

menu._prices = 6
menu.meal = "Milk";


console.log(menu._meal)
console.log(menu._prices)

console.log(menu.todaysSpecial)

// menu['_meal'] = 60;
// menu['_prices'] = "Milk"

// console.log("Menu: ",menu._meal);
// console.log("Prices" , menu._prices)