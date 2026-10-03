const rawTicketCode = "   med-card-0428-ut   ";

const cleanRawTicketCode = rawTicketCode.trim().toUpperCase();


const isValidPrefix = cleanRawTicketCode.startsWith("MED-");
const departmentCode = cleanRawTicketCode.slice(4, 7);
const isPriority = cleanRawTicketCode.includes("-UT");
const displayCode = cleanRawTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Chuỗi in phiếu:", displayCode);
// rawTicketCode.trim();rawTicketCode.toUpperCase(); hai đoạn code này không gán vào biến nào 
// nên khi thực hiện các thao tác bên dưới thì vẫn sẽ hành động trên code cũ từ đó làm sai lệch kết quả mong muốn 
//  1 isValidPrefix "   med-card-0428-ut   " -> false -> true. Trường hợp ban đầu kiểm tra startsWith("MED-")
//  2 displayCode ->    med | card | 0428 | ut   -> MED | CARD | 0428 | UT trường hợp chưa cắt khoảng trống đầu cuối 
