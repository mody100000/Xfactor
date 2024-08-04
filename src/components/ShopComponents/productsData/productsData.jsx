import item from "../../../assets/shop1.png"
import item1 from "../../../assets/item1.png"
import item2 from "../../../assets/item2.png"
import item3 from "../../../assets/item3.png"
import item4 from "../../../assets/item4.png"
import item5 from "../../../assets/item5.png"
import item6 from "../../../assets/item6.png"
import item7 from "../../../assets/item7.png"
import item8 from "../../../assets/item8.png"
const productsData = [
  {
    id: 1,
    image: item1,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    badge: "Hot",
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 2,
    image: item2,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    badge: "-50$",
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 3,
    image: item3,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 4,
    image: item4,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 5,
    image: item,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    badge: "Hot",
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 6,
    image: item5,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 7,
    image: item6,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    badge: "-40%",
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 8,
    image: item7,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 9,
    image: item8,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 10,
    image: item3,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    badge: "-40%",
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 11,
    image: item5,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 12,
    image: item7,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 13,
    image: item8,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 14,
    image: item3,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 15,
    image: item2,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 16,
    image: item1,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 17,
    image: item5,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 18,
    image: item6,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 19,
    image: item7,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 20,
    image: item8,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  {
    id: 21,
    image: item2,
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum',
    price: '$ 599.00',
    info: "Lorem ipsum dolor sit amet consectetur. Senectus auctor in adipiscing arcu sed ornare. Eleifend id blandit nunc faucibus lacus vestibulum nibh turpis diam. Quis neque lobortis",
    thumbnails: [item3, item2, item8],
    relatedProducts: [2, 3, 7,]
  },
  // Add more product objects as needed
];

export default productsData;
