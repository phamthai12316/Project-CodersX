/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readlineSync = require('readline-sync');

var contacts = [];

function loadData(){
  var data = fs.readFileSync('./data.json', 'utf8');
  contacts = JSON.parse(data);
}

function showMenu(){
  console.log('1.Show contact');
  console.log('2.Create contact');
  console.log('3.Repair contact');
  console.log('4.Delete contact');
  console.log('5.Search contact');

  var continuee = readlineSync.question('>>>');
  switch(continuee){
    case '1':
      showContact();
      showMenu();
      break;
    case '2':
      createContact();
      showMenu();
      break;
    case '3':
      repairContact();
      showMenu();
      break;
    case '4':
      deleteContact();
      showMenu();
      break;
    case '5':
      searchContact();
      showMenu();
      break;
    default: 
      console.log('Choose Again');
      showMenu();
      break;  
  }
}

function showContact(){
for(var i = 0; i < contacts.length; i++){
  console.log(i+1, contacts[i].name, contacts[i].phone);
  }
};

function createContact(){
var name = readlineSync.question('Name:');
var phone = readlineSync.question('Phone Number:');
var contact = {
  name: name,
  phone: phone
};
contacts.push(contact);
fs.writeFileSync('./data.json', JSON.stringify(contacts), 'utf8');
}

function repairContact(){

}

function deleteContact(){

}

function searchContact(){

}


function main(){
  loadData();
  showMenu();
}

main();