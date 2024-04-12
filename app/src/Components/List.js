export default function List() {
    const products = [
        {title : "TV" ,id: 101 , isElectronics : true},
        {title : "AC", id: 102,isElectronics : true},
        {title : "Desktop" , id : 103,isElectronics : true},
        {title : "Mobile" , id : 104,isElectronics : true},
        {title : "Scanner" , id : 105,isElectronics : true},
        {title : "Chair" , id : 106,isElectronics : false},
    ];
    const listProducts = products.map(product => <li key={product.id} style={{color: product.isElectronics? 'red':'blue'}}>{product.title}</li>)
    return(
        <ul>{listProducts}</ul>
    );
}