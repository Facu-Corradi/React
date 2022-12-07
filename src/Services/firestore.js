
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, orderBy, limit } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCOn5s1dFyjMYa9s8Ms-jAaRvGugdIxAEc",
    authDomain: "funko-react-d2227.firebaseapp.com",
    projectId: "funko-react-d2227",
    storageBucket: "funko-react-d2227.appspot.com",
    messagingSenderId: "535201838337",
    appId: "1:535201838337:web:5fd51ae888e996ad3dd700"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)


export default async function getItems(){
    const colectionProducts = collection(DB, "products");
    const documentos = await getDocs (colectionProducts);
    const documentsData = documentos.docs.map((doc) => {
        return { 
            ...doc.data(),
            id: doc.id}
    })
    return documentsData;
}

export async function getItemsByOrder() {
    const colectionProducts = collection(DB, "products");
    const q = query(colectionProducts, orderBy("index"), limit(10));
    const documentos = await getDocs(q);
    const documentsData = documentos.docs.map((doc) => {

    return {
        ...doc.data(),
        id: doc.id,
    };
    });
    return documentsData;
}

export async function getSingleItem(idItem) {
    const docRef = doc(DB, "products", idItem);
    const documentos = await getDoc(docRef);
    const itemData = documentos.data();
    itemData.id = documentos.id;

    return itemData;

}


export async function getItemsByCategory(categoryParams) {
    const collectionRef = collection(DB, "products");
    const queryCat = query(
        collectionRef,
    where("category", "==", categoryParams));
    
    const documentos = await getDocs(queryCat);
    const documentsData = documentos.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
    };
    });
    return documentsData;
}


    export async function createOrder(order) {
    const collectionRef = collection(DB, "orders");
    const docOrder = await addDoc(collectionRef, order);
    return docOrder.id;
}

    export async function exportArrayToFirestore() {
    const products = [ 

        {
    id: 1,
    title: "Jon Snow",
    price: 2000,
    stock: 50,
    category: "GOT",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_744647-MLA48137323323_112021-O.jpg",
    },

    {
        id: 2,
        title: "Daenerys Targaryen",
        price: 2100,
        stock: 50,
        category: "GOT",
        imgurl: "https://www.oxfordlibreria.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/5/6/56514_20220608193117.jpg",
    },

    {
        id: 3,
        title: "Arya Stark",
        price: 2200,
        stock: 50,
        category: "GOT",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_918734-MLA31310817441_072019-O.webp",
    },

    {
        id: 4,
        title: "Tyrion Lannister",
        price: 2300,
        stock: 50,
        category: "GOT",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_684344-MPE27852243131_072018-O.jpg",
    },

    {
        id: 5,
        title: "Night King",
        price: 2500,
        stock: 50,
        category: "GOT",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_749201-MLA43452395223_092020-O.jpg",
    },

    {
        id: 6,
        title: "Harry Potter",
        price: 2400,
        stock: 50,
        category: "HarryP",
        imgurl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/787/733/products/harry-911-1405b111396c7101ac16312944435947-1024-1024.jpg",
    },

    {
        id: 7,
        title: "Hermione Granger",
        price: 2600,
        stock: 50,
        category: "HarryP",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_690702-MLA49736474507_042022-O.webp",
    },

    {
        id: 8,
        title: "Albus Dumbledore",
        price: 2700,
        stock: 50,
        category: "HarryP",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_997234-MLA48385151017_112021-O.jpg",
    },

    {
        id: 9,
        title: "Ron Weasley",
        price: 2800,
        stock: 50,
        category: "HarryP",
        imgurl: "https://i.pinimg.com/564x/52/2d/62/522d625bc6093b382f66181ab3c8df88.jpg",
    },

    {
        id: 10,
        title: "Lord Voldemort ",
        price: 2900,
        stock: 50,
        category: "HarryP",
        imgurl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/787/733/products/voldemort-061-9ec1e61ff6b75d25dd16478835445751-480-0.jpg",
    },

    {
        id: 11,
        title: "Drogon ",
        price: 2900,
        stock: 50,
        category: "GOT",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_672818-MLA31136078751_062019-O.webp",
    },

    {
        id: 12,
        title: "Ned Stark ",
        price: 2900,
        stock: 50,
        category: "Got",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_935531-MLA43960798703_102020-O.jpg",
    },

    {
        id: 13,
        title: "Sansa Stark ",
        price: 2900,
        stock: 50,
        category: "GOT",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_614713-MLA43738724671_102020-O.jpg",
    },

    {
        id: 14,
        title: "Lord Varys ",
        price: 2900,
        stock: 50,
        category: "GOT",
        imgurl: "https://baibao.com.ar/wp-content/uploads/2022/06/D_734250-MLA40429898244_012020-F.jpg",
    },

    {
        id: 15,
        title: "Arya Stark ",
        price: 2900,
        stock: 50,
        category: "GOT",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_799201-MLA51714584249_092022-V.jpg",
    },

    {
        id: 16,
        title: "Dementor ",
        price: 2900,
        stock: 50,
        category: "HarryP",
        imgurl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dementor-1539011480.jpg",
    },

    {
        id: 17,
        title: "George Weasley ",
        price: 2900,
        stock: 50,
        category: "HarryP",
        imgurl: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/39291/889698428439.jpg",
        },

    {
        id: 18,
        title: "Lucius Malfoy ",
        price: 2900,
        stock: 50,
        category: "HarryP",
        imgurl: "https://d2r9epyceweg5n.cloudfront.net/stores/001/298/731/products/fun10992-harry-potter-lucius-as-death-eater-pop-vinyl-figure-01-1561430757_1400x1-c2f145f91756b5b7d316380674018743-1024-1024.png",
    },

    {
        id: 19,
        title: "Rubeus Hagrid",
        price: 2900,
        stock: 50,
        category: "HarryP",
        imgurl: "https://images.stockx.com/images/Funko-Pop-Harry-Potter-Rubeus-Hagrid-6-Inch-Figure-07.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1650647715&q=75",
    },

    {
        id: 20,
        title: "Dobby ",
        price: 2900,
        stock: 50,
        category: "HarryP",
        imgurl: "https://http2.mlstatic.com/D_NQ_NP_905712-MLA43657819010_102020-O.jpg",
    },

    ];

    const collectionRef = collection(DB, "products");

    for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento creado, id:", docOrder.id);
}}