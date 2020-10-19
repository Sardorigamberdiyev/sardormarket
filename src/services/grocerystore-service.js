

export default class GrocerystoreService {

    products = {
        fruits: [
            {
                id: 1,
                image: "https://img.pravda.ru/image/preview/article/5/4/1/1439541_five.jpeg",
                name: "Банан",
                price: 11000,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "нендрум"
            },
            {
                id: 2,
                image: "https://prostoest.ru/wp-content/uploads/2013/09/85793482-727x522.jpg",
                name: "Персик",
                price: 9900,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "белый лебедь"
            },
            {
                id: 3,
                image: "https://www.okeydostavka.ru/wcsstore/OKMarketCAS/cat_entries/1772/1772_fullimage.jpg",
                name: "Апельсин",
                price: 7100,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "светлый"
            },
            {
                id: 4,
                image: "https://lifeglobe.net/x/entry/6259/1a-0.jpg",
                name: "Яблоко",
                price: 3300,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "ред делишес"
            },
            {
                id: 22,
                image: "https://prostoest.ru/wp-content/uploads/2013/08/125429195-727x522.jpg",
                name: "Груша",
                price: 4100,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "дюшес"
            },
            {
                id: 23,
                image: "https://www.okeydostavka.ru/wcsstore/OKMarketCAS/cat_entries/606/606_fullimage.jpg",
                name: "Арбуз",
                price: 5000,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "обычный"
            },
            {
                id: 25,
                image: "https://m.dom-eda.com/uploads/images/catalog/item/64bcf6c217/7ba44342a5_1000.jpg",
                name: "Дыня",
                price: 4000,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "чиллаки"
            },
            {
                id: 45,
                image: "https://images.lady.mail.ru/456727/",
                name: "Киви",
                price: 6600,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "обычный"
            }
        ],
        vegetables: [
            {
                id: 5,
                image: "https://e0.edimdoma.ru/data/ingredients/0000/1043/1043-ed4_wide.jpg?1487748623",
                name: "Морковь",
                price: 3000,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "амстердамская"
            },
            {
                id: 6,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Aubergine.jpg/275px-Aubergine.jpg",
                name: "Баклажан",
                price: 4500,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "шарапова"
            },
            {
                id: 7,
                image: "https://agrolife.ua/media/olegnax/vladam-seeds/blog/ogurets.jpg",
                name: "Огурец",
                price: 3800,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "цепличный"
            },
            {
                id: 8,
                image: "https://delo.ua/files/news/images/3558/63/picture2_ceny-na-pomidory-_355863_p0.jpg",
                name: "Помидор",
                price: 2500,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "узбекский томат"
            },
            {
                id: 33,
                image: "https://m.dom-eda.com/uploads/images/catalog/item/0bf6389828/d44eaf56d2_500.png",
                name: "Тыква",
                price: 3300,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "парижская золота"
            },
            {
                id: 35,
                image: "https://edaplus.info/food_pictures/maize.jpg",
                name: "Кукуруз",
                price: 2000,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "воздушная"
            },
            {
                id: 36,
                image: "https://www.zdorovieinfo.ru/wp-content/uploads/2019/06/shutterstock_585742934.jpg",
                name: "Сладкий перец",
                price: 1200,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "разные"
            },
            {
                id: 38,
                image: "https://grodnonews.by/upload/iblock/e67/e679ec9036f1ae921e18f4d2a0e915cb.jpg",
                name: "Ридиска",
                price: 1500,
                count: 1,
                total: 0,
                unit: "1 кг",
                grade: "сора"
            },
        ],
        drinks: [
            {
                id: 10,
                image: "https://www.ccbu.uz/images/brands/cc3.jpg",
                name: "Кока-кола",
                price: 3500,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "0.5л"
            },
            {
                id: 13,
                image: "https://aqua-beer.ru/wp-content/uploads/2019/08/kola-20.png",
                name: "Фанта",
                price: 7000,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "1л"
            },
            {
                id: 14,
                image: "https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_banka-adrenalin-for-vending.jpg",
                name: "Адреналин",
                price: 9000,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "449мл"
            },
            {
                id: 16,
                image: "https://arba.uz/media/catalog/product/cache/1/image/800x800/eb99b8428ed4695ff2aa3c291780dc7e/4/7/4780022620177.png",
                name: "Пепси",
                price: 7500,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "1.5л"
            },
            {
                id: 39,
                image: "https://i.otzovik.com/objects/b/10000/803.png",
                name: "Спрайт",
                price: 7000,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "баночный 300мл"
            },
            {
                id: 40,
                image: "https://assets.sainsburys-groceries.co.uk/gol/7988920/1/640x640.jpg",
                name: "Липтон",
                price: 2500,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "0.5л"
            },
            {
                id: 42,
                image: "https://uz.all.biz/img/uz/catalog/921.jpeg",
                name: "Гидролайф",
                price: 1800,
                count: 1,
                total: 0,
                unit: "1 шт",
                grade: "0.5л, 1л, 1.5л"
            },
        ]
    };

    getAllProducts() {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products), 700)
            } else {
                reject(new Error('error while receiving data'))
            }
        });
    };

    getFruit(id) {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products.fruits.find((item) => item.id === Number(id))), 700)
            } else {
                reject(new Error('error while receiving data'))
            }
        });
    };

    getAllFruits() {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products.fruits), 700)
            } else {
                reject(new Error('error while receiving data'));
            }
        });
    }

    getVegetable(id) {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products.vegetables.find((item) => item.id === Number(id))), 700)
            } else {
                reject(new Error('error while receiving data'))
            }
        });
    };

    getAllVegetables() {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products.vegetables), 700)
            } else {
                reject(new Error('error while receiving data'));
            }
        });
    }

    getDrink(id) {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products.drinks.find((item) => item.id === Number(id))), 700)
            } else {
                reject(new Error('error while receiving data'))
            }
        });
    };

    getAllDrinks() {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.99) {
                setTimeout(() => resolve(this.products.drinks), 700)
            } else {
                reject(new Error('error while receiving data'));
            }
        });
    }


}