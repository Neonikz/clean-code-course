type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {

        //No DRY
        // if (this.name.length <= 0) throw Error('Name is empty');
        // if (this.price <= 0) throw Error('Price is zero');
        // if (this.size.length <= 0) throw Error('Size is empty');

        //Principio DRY
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }

        return true;
    }

    toString() {

        if (!this.isProductReady()) return

        return `${this.name} ($${this.price}), ${this.size}`
    }
}

(() => {

    const bluePants = new Product('Blue Large Pants', 10, 'M')
    console.log(bluePants.toString())

})();


