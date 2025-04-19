export const list = (request: any): Promise<any> => {

    const productList: any[] = [];

    console.log(request);

    for(let i=0;i<100;i++){
        productList.push(
            {
                id: (i + 1),
                name: '苹果手机' + (i + 1),
                desc: 'iphone 12',
                price: 5999,
                img: 'https://img.alicdn.com/bao/uploaded/i3/2216439838709/O1CN01xsrwcj2ECmDgMsmJn_!!0-item_pic.jpg_460x460q90.jpg_.webp'
            }
        )
    }

    return new Promise<any>(resolve => {
        setTimeout(() => {
            const list = productList.filter(item => {
                return item.name.includes(request);
            });
            resolve(list);
        }, 1000)
    })
}