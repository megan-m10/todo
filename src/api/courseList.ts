export const Courselist = (request: any): Promise<any> => {

    const productList: any[] = [];
    const names = ["Intro to 3D Art", "Intro to 2D Art", "Algebra 1", "Algebra 2", "Perspective in Literature"];

    console.log(request);

    for (let i = 0; i < 100; i++) {
        productList.push(
            {
                id: (i + 1),
                name: 'course' + (i + 1)+'  '+names[i],
                desc: 'blablabla',
                teacher: 'T.teacher',
                img: 'https://img.alicdn.com/bao/uploaded/i3/2216439838709/O1CN01xsrwcj2ECmDgMsmJn_!!0-item_pic.jpg_460x460q90.jpg_.webp'
            }
        );
    }

    return new Promise<any>(resolve => {
        setTimeout(() => {
            const filteredCourses = productList.filter(item => {
                return item.name.toLowerCase().includes(request.toLowerCase());
            });


            resolve(filteredCourses);
        }, 1000);
    });
}
