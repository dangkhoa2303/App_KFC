class Product {
    name;
    price;
    image;
    category;
    constructor(name , price , image , category){
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
    }
    getName (){
        return this.name;
    }
    getPrice (){
        return this.price
    }
    getImage (){
        return this.image
    }
    getCategory (){
        return this.category;
    }
    setName(name) {
        this.name = name ;
    }
    setPrice(price) {
        this.price = price
    }
    setImage(image) {
        this.image = image;
    }
    setCategory(category){
        this.category = category;
    }
}
new Product("Gà Rán 1 miếng " , 35000 ,"../HINHANH/hinh8.1.jpeg" ,"gà rán" )
let garan1 = new Product("Gà Rán 1 miếng " , 35000 ,"../HINHANH/hinh8.1.jpeg" ,"gà rán" );
let garan2 = new Product("Gà Rán 2 miếng " , 68000 ,"../HINHANH/hinh9.jpeg","gà rán" );
let garan3 = new Product("Gà Rán 3 miếng " , 101000 ,"../HINHANH/hinh10.jpeg" ,"gà rán" );
let garan4 = new Product("Gà Rán 6 miếng " , 195000 ,"../HINHANH/hinh11.jpeg" ,"gà rán" );
let arrayGaran = [[garan1, garan2 , garan3],[garan4]];
new Product("Bắp cải trộn (nhỏ)" , 12000 , "../HINHANH/hinh12.jpeg" , "thức ăn nhẹ" )
let thucannhe1 = new Product("Bắp cải trộn (vừa)" , 12000 , "../HINHANH/hinh12.jpeg" , "thức ăn nhẹ" );
let thucannhe2 = new Product("Bắp cải trộn (lớn)" , 22000 , "../HINHANH/hinh12.jpeg", "thức ăn nhẹ" );
let thucannhe3 = new Product("Bắp cải trộn (đại)" , 32000 , "../HINHANH/hinh12.jpeg" , "thức ăn nhẹ" );
let arrayThucannhe = [[thucannhe1, thucannhe2, thucannhe3]];
new Product("Bánh trứng 1 cái", 17000 , "../HINHANH/hinh13.jpeg","tráng miệng" );
let trangmieng1 = new Product("Bánh trứng 1 cái", 17000 , "../HINHANH/hinh13.jpeg","tráng miệng" );
let trangmieng2 = new Product("Bánh trứng 4 cái", 54000 , "../HINHANH/hinh14.jpeg","tráng miệng" );
let trangmieng3 = new Product("Thanh bí Phô-Mai 2 thanh", 26000 ,"../HINHANH/hinh15.jpeg","tráng miệng" );
let trangmieng4 = new Product("Thanh bí Phô-Mai 3 thanh", 35000 , "../HINHANH/hinh16.jpeg","tráng miệng" );
let arrayTrangmieng = [[trangmieng1, trangmieng2, trangmieng3],[trangmieng4]];
new Product("Pepsi Lon", 17000 , "../HINHANH/hinh17.jpeg","thức uống");
let thucuong1 = new Product("Pepsi Lon", 17000 , "../HINHANH/hinh17.jpeg","thức uống");
let thucuong2 = new Product("7Up Lon", 17000 , "../HINHANH/hinh18.jpeg","thức uống");
let thucuong3 = new Product("Aquafina", 15000 , "../HINHANH/hinh19.jpeg","thức uống");
let thucuong4 = new Product("Hộp Milo", 20000 , "../HINHANH/hinh20.jpeg","thức uống");
let arrayThucuong = [[thucuong1, thucuong2, thucuong3],[thucuong4]];
function showElement(array) {
    let content = "<table>";
    for (let i = 0 ;i < array.length; i++){
        content += "<tr>";
        for (let j = 0; j < array[i].length ; j++){
            content += "<td>"
            content += "<img alt='lỗi' src=" + array[i][j].image + ">"
            content += "<h2>" + array[i][j].name + "</h2>"
            content += "<p>Giá: " + array[i][j].price + "VND</p>"
            if (!checkAdmin()) {
                content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;"
                content += "<button onclick='deleteProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Xóa&nbsp;</button>"
            }
            content += "</td>"
        }
    content += "</tr>"
    }
content += "</table>"
document.getElementById("displayElement").innerHTML = content
}
function showGaran(){
    showElement(arrayGaran)
}
function showThucannhe(){
    showElement(arrayThucannhe)
}
function showTrangmieng(){
    showElement(arrayTrangmieng)
}
function showThucuong(){
    showElement(arrayThucuong)
}
function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index(canhan).html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}