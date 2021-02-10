function validation(data) {
const{name,description,imageUrl}=data

    if (name.length ==0 || description.length == 0||imageUrl.length==0) {
        return false
    }else{
        return true
    }


}
module.exports = validation