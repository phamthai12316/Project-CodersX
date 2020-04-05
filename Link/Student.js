/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
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

// hiện ra menu
function showMenu(){
  console.log('1. Show contact');
  console.log('2. Create new contact');
  console.log('3. Repair contact');
  console.log('4. Delete contact');
  console.log('5. Search contact');
  var option = readlineSync.question('>>> ');
  switch(option){
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
    case '5':
      searchContact();
      showMenu();
      break;
    default:
      console.log('Please choose again!');
      showMenu();
      break;
  };
};

// lấy dữ liệu từ file data
function loadData(){
  var data = fs.readFileSync('./data.json');
  contacts = JSON.parse(data);
}

// hiển thị các contact
function showContact(){
  for (var i = 0; i < contacts.length; i++){
    console.log(i, contacts[i].name, contacts[i].phone);
  };
};

// tạo mới contact
function createContact(){
  var name = readlineSync.question('Name: ');
  var phone = readlineSync.question('Phone: ');
  var newContact = {
    name: name,
    phone: parseInt(phone)
  };
  contacts.push(newContact);
  fs.writeFileSync('./data.json',JSON.stringify(contacts), 'utf8');
};

// sửa contact
function repairContact(){
  showContact();
  var repair = readlineSync.question('Choose contact ID you want repair: ')
  var name = readlineSync.question('New name: ');
  var phone = readlineSync.question('New phone: ');
  var newContact1 = {
    name: name,
    phone: phone
  }
  if (contacts[repair] = newContact1){
    fs.writeFileSync('./data.json', JSON.stringify(contacts));
  };
  showContact();
};

// xóa contact;
function deleteContact(){
  showContact();
  var del = readlineSync.question('Choose contact ID you want delete: ');
  return contacts.splice(del,1);
};

// tìm contact;
function searchContact() {
  console.log('Search name or phone by ID!');
  console.log('1: Search by name');
  console.log('2: Search by phone');
  var search = readlineSync.question('>>> ');
  switch (search) {
    case '1':
      for (var i = 0; i < contacts.length; i++) {
        console.log(contacts[i].name)
      }
      ;
      break;
  };
};
  function main() {
    loadData();
    showMenu();
  };
  main()
