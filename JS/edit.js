function renderEdit(text) {
    let data = ""
    data += "<table id='table'>" +
        "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
        "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
        "<tr><td><label for='category'>Loại hàng</label></td>" +
        "<td><select id='category'>" +
        "<option></option>" +
        "<option value='gà rán'>gà rán</option>" +
        "<option value='thức ăn nhẹ'>thức ăn nhẹ</option>" +
        "<option value='tráng miệng'>tráng miệng</option>" +
        "<option value='thức uống'>thức uống</option>" +
        "</select></td></tr>" +
        "<tr><td></td><td>" +
        "<button onclick='editForm()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
        "<button onclick='cancelEdit()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
        "</table>"
    document.getElementById("poster").innerHTML = data
}
function cancelEdit() {
    document.getElementById("poster").innerHTML = "<img src=\"../HINHANH/hinh6.1.jpeg\" alt=\"Lỗi\" width=\"100%\" height=\"100%\">"
}
function editForm() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let image = document.getElementById("image").value
    let category = document.getElementById("category").value
    let i = localStorage.getItem("indexI")
    let j = localStorage.getItem("indexJ")
    switch (category) {
        case "gà rán": {
            arrayGaran[i][j] = new Product(name, price, image, category)
            showGaran()
            break
        }
        case "thức ăn nhẹ": {
            arrayThucannhe[i][j] = new Product(name, price, image, category)
            showThucannhe()
            break
        }
        case "tráng miệng": {
            arrayTrangmieng[i][j] = new Product(name, price, image, category)
            showTrangmieng() 
            break
        }
        case "thức uống": {
            arrayThucuong[i][j] = new Product(name, price, image, category)
            showThucuong()
            break
        }
    }
    cancelEdit()
}
function editProduct(i, j, category) {
    localStorage.setItem("indexI", i)
    localStorage.setItem("indexJ", j)
    switch (category) {
        case "gà rán": {
            renderValueEdit(arrayGaran[i][j])
            break
        }
        case "thức ăn nhẹ": {
            renderValueEdit(arrayThucannhe[i][j])
            break
        }
        case "tráng miệng": {
            renderValueEdit(arrayTrangmieng[i][j])
            break
        }
        case "thức uống": {
            renderValueEdit(arrayThucuong[i][j])
            break
        }
    }
}

function renderValueEdit(product) {
    document.getElementById("name").value = product.getName()
    document.getElementById("price").value = product.getPrice()
    document.getElementById("image").value = product.getImage()
    document.getElementById("category").value = product.getCategory()
}