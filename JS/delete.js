function reRender(category) {
    switch (category) {
        case "gà rán": {
            showGaran()
            break
        }
        case "thức ăn nhẹ": {
            showThucannhe()
            break
        }
        case "tráng miệng": {
            showTrangmieng() 
            break
        }
        case "thức uống": {
            showThucuong()
            break
        }
    }
}

function deleteProduct(i, j, category) {
    switch (category) {
        case "gà rán": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayGaran[i][j].getName() + "?")) {
                arrayGaran[i].splice(j, 1)
            }
            break
        }
        case "thức ăn nhẹ": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayThucannhe[i][j].getName() + "?")) {
                arrayThucannhe[i].splice(j, 1)
            }
            break
        }
        case "tráng miệng": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayTrangmieng[i][j].getName() + "?")) {
                arrayTrangmieng[i].splice(j, 1)
            }
            break
        }
        case "thức uống": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayThucuong[i][j].getName() + "?")) {
                arrayThucuong[i].splice(j, 1)
            }
            break
        }
    }
    reRender(category)
}