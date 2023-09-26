import preview from '../images/prev.png';
import black from '../images/black.png';
import orange from '../images/orange.png';
import pink from '../images/pink.png';
import yellow from '../images/yellow.png';
import seller from '../images/seller.svg';

let date = new Date(Date.now());
date.setDate(date.getDate() + 2)

export const products = [{
    "id": "0",
    "type": "slippers",
    "seller": seller,
    "title": "orthopedic slippers",
    "delivery": "2 - 4 days from SA",
    "shipping": "Shipping from Johannesburg",
    "country": "za",
    "preview_image": preview,
    "options": [{
        "color": "black",
        "image": black
    },
    {
        "color": "orange",
        "image": orange
    },
    {
        "color": "pink",
        "image": pink
    },
    {
        "color": "yellow",
        "image": yellow
    }],
    "sizes": ["2", "3", "4", "5",],
    "deadline": date.toISOString(),
    "prev_price": "250.00",
    "curr_price": "160.00",
    "reviews": [{
        "id": "0",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "1",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "4",
    }, {
        "id": "2",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "3",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "4",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "5",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "6",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "7",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "8",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "5",
    }, {
        "id": "9",
        "customer_id": "0",
        "text": "0",
        "title": "0",
        "estimation": "4",
    },]
}]