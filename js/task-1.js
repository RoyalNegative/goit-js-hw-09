// Geliştirici ayrılmadan önce, yemek dağıtım hizmetimiz için kullanıcı hesaplarını yönettiğimiz kaynak kodunu hackledi.
//  Nesnenin özelliklerine erişirken eksik olan this ifadesini değiştirerek customer nesnesinin metodlarını yeniden düzenleyin.



// Bu başlangıç kodunu kullanın ve yeniden düzenleyin. Nesneyi tanımladıktan sonra yöntem çağrılarını ekleyin. 
// Çalışmalarının sonuçları konsolda görüntülenecektir. Lütfen orada herhangi bir değişiklik yapmayın.



const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],


  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]