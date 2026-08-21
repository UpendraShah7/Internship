interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

interface Order {
  id: number;
  userId: number;
  total: number;
  items: string[];
}


// ApiResponse<User>
const userResponse: ApiResponse<User> = {
  status: 200,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Ram",
    email: "ram@example.com",
  },
};

// ApiResponse<Product>
const productResponse: ApiResponse<Product> = {
  status: 200,
  message: "Product fetched successfully",
  data: {
    id: 101,
    title: "Wireless Mouse",
    price: 799,
  },
};
    
// ApiResponse<Order>
const orderResponse: ApiResponse<Order> = {
  status: 201,
  message: "Order created successfully",
  data: {
    id: 55,
    userId: 1,
    total: 1598,
    items: ["Wireless Mouse", "Keyboard"],
  },
};


function printApiResponse<T>(response: ApiResponse<T>): void {
  console.log(`Status: ${response.status}`);
  console.log(`Message: ${response.message}`);
  console.log("Data:", response.data);
}

printApiResponse(userResponse);
printApiResponse(productResponse);
printApiResponse(orderResponse);






