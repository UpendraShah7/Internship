import { createProduct } from './createProduct.js';
import { deleteProduct } from './deleteProduct.js';
import { getAllProducts, getProductById } from './getProducts.js';
import { updateProduct } from './updateProduct.js';
import type { Product, ProductCategory, ProductStatus } from './api.js';

const form = document.getElementById('product-form') as HTMLFormElement;
const nameInput = document.getElementById('f-name') as HTMLInputElement;
const descriptionInput = document.getElementById(
  'f-description'
) as HTMLTextAreaElement;
const priceInput = document.getElementById('f-price') as HTMLInputElement;
const stockInput = document.getElementById('f-stock') as HTMLInputElement;
const categoryInput = document.getElementById(
  'f-category'
) as HTMLSelectElement;
const statusInput = document.getElementById('f-status') as HTMLSelectElement;
const tableBody = document.getElementById(
  'product-table-body'
) as HTMLTableSectionElement;
const submitBtn = form.querySelector(
  'button[type="submit"]'
) as HTMLButtonElement;
const addProductBtn = document.getElementById(
  'add-product-btn'
) as HTMLButtonElement;
const cancelBtn = document.getElementById('cancel-btn') as HTMLButtonElement;
const panel = document.getElementById('form-panel') as HTMLElement;
const panelOverlay = document.getElementById('panel-overlay') as HTMLElement;
const panelTitle = document.getElementById('panel-title') as HTMLElement;
const formErrors = document.getElementById('form-errors') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const categoryFilter = document.getElementById(
  'category-filter'
) as HTMLSelectElement;
const statusFilter = document.getElementById(
  'status-filter'
) as HTMLSelectElement;
const sortField = document.getElementById('sort-field') as HTMLSelectElement;
const sortOrderBtn = document.getElementById('sort-order') as HTMLButtonElement;
const productCount = document.getElementById('product-count') as HTMLElement;
const emptyState = document.getElementById('empty-state') as HTMLElement;

let editingId: string | null = null;
let ascending = true;

function isProductCategory(value: unknown): value is ProductCategory {
  return (
    value === 'Electronics' ||
    value === 'Clothing' ||
    value === 'Food' ||
    value === 'Books'
  );
}

function isProductStatus(value: unknown): value is ProductStatus {
  return (
    value === 'Active' ||
    value === 'Inactive' ||
    value === 'Discontinued' ||
    value === 'OutOfStock'
  );
}

function filterProducts(allProducts: Product[]): Product[] {
  const searchText = searchInput.value.trim().toLowerCase();
  const result: Product[] = [];

  for (const product of allProducts) {
    const nameMatches = product.name.toLowerCase().includes(searchText);
    const descriptionMatches = (product.description ?? '')
      .toLowerCase()
      .includes(searchText);
    const searchMatches = nameMatches || descriptionMatches;

    const categoryMatches =
      categoryFilter.value === 'All' ||
      product.category === categoryFilter.value;

    const statusMatches =
      statusFilter.value === 'All' || product.status === statusFilter.value;

    if (searchMatches && categoryMatches && statusMatches) {
      result.push(product);
    }
  }

  return result;
}

function sortProducts(list: Product[]): Product[] {
  type SortField = 'name' | 'price' | 'stock';
  const field = sortField.value as SortField;
  const sorted = [...list];

  sorted.sort((a, b) => {
    let result = 0;

    if (field === 'name') {
      result = a.name.localeCompare(b.name);
    } else if (field === 'price') {
      result = a.price - b.price;
    } else if (field === 'stock') {
      result = a.stock - b.stock;
    }

    if (!ascending) {
      result = -result;
    }

    return result;
  });

  return sorted;
}

sortOrderBtn.addEventListener('click', () => {
  ascending = !ascending;
  sortOrderBtn.textContent = ascending ? '↑ Asc' : '↓ Desc';
  render();
});

function buildRow(p: Product): HTMLTableRowElement {
  const row = document.createElement('tr');

  const statusLabel = p.status === 'OutOfStock' ? 'Out of stock' : p.status;
  const statusClass = p.status.toLowerCase().replace('outofstock', 'out');

  row.innerHTML = `
    <td class="mono">${p.id.slice(-6)}</td>
    <td>
      <div class="name-cell">${p.name}</div>
      <div class="desc-cell">${p.description ?? 'No description'}</div>
    </td>
    <td><span class="category-tag">${p.category}</span></td>
    <td class="num">Rs. ${p.price.toFixed(2)}</td>
    <td>
      <div class="stock-cell">  
        <span class="mono">${p.stock}</span>
        <span class="gauge">
          <span class="gauge-fill" style="width:${Math.min(p.stock, 100)}%"></span>
        </span>
      </div>
    </td>
    <td><span class="pill pill-${statusClass}">${statusLabel}</span></td>
    <td>
      <button class="icon-btn edit-btn" data-id="${p.id}" title="Edit product">✎</button>
      <button class="icon-btn icon-btn-danger delete-btn" data-id="${p.id}" title="Delete product">x</button>
    </td>
  `;

  return row;
}

function render(): void {
  const allProducts = getAllProducts();
  const afterFilter = filterProducts(allProducts);
  const afterSort = sortProducts(afterFilter);

  tableBody.innerHTML = '';

  for (const product of afterSort) {
    const row = buildRow(product);
    tableBody.appendChild(row);
  }

  productCount.textContent = afterSort.length + ' of ' + allProducts.length;

  if (afterSort.length === 0) {
    emptyState.style.display = 'flex';
  } else {
    emptyState.style.display = 'none';
  }
}

addProductBtn.addEventListener('click', () => {
  openPanel();
});

function openPanel(product?: Product): void {
  if (product) {
    editingId = product.id;
    panelTitle.textContent = 'Edit product';
    submitBtn.textContent = 'Save changes';
    nameInput.value = product.name;
    descriptionInput.value = product.description ?? '';
    priceInput.value = product.price.toString();
    stockInput.value = product.stock.toString();
    categoryInput.value = product.category;
    statusInput.value = product.status;
  } else {
    editingId = null; 
    panelTitle.textContent = 'Add product';
    submitBtn.textContent = 'Save';
    form.reset();
  }

  formErrors.textContent = '';
  panel.classList.add('open');
  panelOverlay.classList.add('open');
}

cancelBtn.addEventListener('click', () => {
  closePanel();
});

function closePanel(): void {
  panel.classList.remove('open');
  panelOverlay.classList.remove('open');
  editingId = null;
  form.reset();
}

panelOverlay.addEventListener('click', () => {
  closePanel();
});

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const description = descriptionInput.value.trim();
  const price = parseFloat(priceInput.value);
  const stock = parseInt(stockInput.value, 10);
  const category = categoryInput.value;
  const status = statusInput.value;

  if (
    name === '' ||
    Number.isNaN(price) ||
    Number.isNaN(stock) ||
    !isProductCategory(category) ||
    !isProductStatus(status)
  ) {
    formErrors.textContent = 'Please fill every field correctly.';
    return;
  }

  if (editingId) {
    updateProduct(editingId, {
      name,
      description,
      price,
      stock,
      category,
      status,
    });
  } else {
    createProduct(name, description, price, stock, category, status);
  }
  closePanel();
  render();
});


// Edit and delete
tableBody.addEventListener('click', (e: Event) => {
  const target = e.target as HTMLElement;
  const id = target.getAttribute('data-id');

  if (!id) return;

  if (target.classList.contains('delete-btn')) {
    deleteProduct(id);
    render();
  }

  if (target.classList.contains('edit-btn')) {
    const product = getProductById(id);
    if (product) {
      openPanel(product);
    }
  }
});

searchInput.addEventListener('input', () => {
  render();
});

categoryFilter.addEventListener('change', () => {
  render();
});

statusFilter.addEventListener('change', () => {
  render();
});

sortField.addEventListener('change', () => {
  render();
});

render();
