interface ApiModel<T> {
  status: number;
  timestamp: string;
  data: T;
}

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
}

interface Order {
  id: number;
  total: number;
}

const userResponse: ApiModel<User> = {
  status: 200,
  timestamp: "2026-08-20",
  data: { id: 1, name: "Ram" },
};

const productResponse: ApiModel<Product> = {
  status: 200,
  timestamp: "2026-08-20",
  data: { id: 101, title: "Mouse" },
};

const orderResponse: ApiModel<Order> = {
  status: 201,
  timestamp: "2026-08-20",
  data: { id: 55, total: 799 },
};

console.log(userResponse);
console.log(productResponse);
console.log(orderResponse);







//without generics
// interface UserResponse {
//   status: number;
//   timestamp: string;
//   data: {
//     id: number;
//     name: string;
//   };
// }

// interface ProductResponse {
//   status: number;
//   timestamp: string;
//   data: {
//     id: number;
//     title: string;
//   };
// }

// interface OrderResponse {
//   status: number;
//   timestamp: string;
//   data: {
//     id: number;
//     total: number;
//   };
// }

// const userResponse: UserResponse = {
//   status: 200,
//   timestamp: "2026-08-20",
//   data: { id: 1, name: "Ram" },
// };

// const productResponse: ProductResponse = {
//   status: 200,
//   timestamp: "2026-08-20",
//   data: { id: 101, title: "Mouse" },
// };

// const orderResponse: OrderResponse = {
//   status: 201,
//   timestamp: "2026-08-20",
//   data: { id: 55, total: 799 },
// };

// console.log(userResponse);
// console.log(productResponse);
// console.log(orderResponse);