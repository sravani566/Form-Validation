function validateBook() {
    var isbn = document.getElementById("isbnId").value;
    var title = document.getElementById("titleId").value;
    var price = document.getElementById("priceId").value;
    var pubdate = document.getElementById("pubdateId").value;
    var booktype = document.getElementById("booktypeId").value;
    var noOfCopies = document.getElementById("noOfCopiesId").value;
    var pubname = document.getElementById("pubnameId").value;
    var pubaddress = document.getElementById("pubaddressId").value;
    var author= document.getElementById("authorId").value;
    var authoraddress = document.getElementById("authoraddressId").value;
    if(!isValidIsbn(isbn)) {
        document.getElementById("isbnMsg").innerHTML = "Enter valid isbn number";
        document.getElementById("isbnMsg").style.color="red";
        return false;
    }

    if(!isValidTitle(title)) {
        document.getElementById("titleMsg").innerHTML = "Enter valid title";
        document.getElementById("titleMsg").style.color="red";
        return false;
    }

    if(!isValidPrice(price )) {
        document.getElementById("priceMsg").innerHTML = "Enter valid price";
        document.getElementById("priceMsg").style.color="red";
        return false;
    }

    if(!isValidPrice(pubdate )) {
        document.getElementById("pubdateMsg").innerHTML = "Enter valid price";
        document.getElementById("pubdateMsg").style.color="red";
        return false;
    }

    if(!isValidPrice(booktype )) {
        document.getElementById("booktypeMsg").innerHTML = "Enter valid price";
        document.getElementById("booktypeMsg").style.color="red";
        return false;
    }

    

    if(!isValidCopies(noOfCopies) ){
        document.getElementById("noOfCopiesMsg").innerHTML = "Enter valid number";
        document.getElementById("noOfCopiesMsg").style.color="red";
        return false;
    }

    if(!isValidName(pubname)) {
        document.getElementById("publisherMsg").innerHTML = "Enter valid publisher name";
        document.getElementById("publisherMsg").style.color="red";
        return false;
    }

    if(!isValidName(pubaddress)) {
        document.getElementById("publisheraddressMsg").innerHTML = "Enter valid publisher name";
        document.getElementById("publisheraddressMsg").style.color="red";
        return false;
    }

    if(!isValidName(author)) {
        document.getElementById("authorMsg").innerHTML = "Enter valid author name";
        document.getElementById("authorMsg").style.color="red";
        return false;
    }

    if(!isValidName(authoraddress)) {
        document.getElementById("authoraddressMsg").innerHTML = "Enter valid publisher name";
        document.getElementById("authoraddressMsg").style.color="red";
        return false;
    }

    return true;
}

