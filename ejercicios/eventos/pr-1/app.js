let listaCompra = ["leche", "pan", "huevos"];

const $ = (selector) => document.querySelector(selector);

const $list = $("#lista");
const $add_btn = $("#btn-agregar");
const $del_btn = $("#btn-eliminar");
const $sort_btn = $("#btn-ordenar");
const $input = $("#input-producto");
const $counter = $("#contador");
const $search = $("#buscador");


const show_list = (productos = listaCompra) => {
  $list.innerHTML = "";

  productos.forEach((item) => {
    const li = document.createElement("li");

    li.addEventListener("click", () => {
      const index = listaCompra.indexOf(item);
      delete_item(index);
    });

    $list.appendChild(li).textContent = item;

  });

  $counter.textContent =
    listaCompra.length === 0
      ? "La lista está vacía"
      : `Tienes ${listaCompra.length} producto${listaCompra.length > 1 ? "s" : ""} en la lista. 
    Se muestra${productos.length !== 1 ? "n" : ""} ${productos.length}.
    `;
};

const search_list = () => {
  const text = $search.value.toLowerCase();

  const filtered = listaCompra.filter((item) =>
    item.toLowerCase().includes(text),
  );

  show_list(filtered);
};

const add_to_list = () => {
  const item = $input.value.trim();

  if (item !== "") {
    if(listaCompra.some((producto) => producto.toLowerCase() === item.toLowerCase())) {
        alert("Este producto ya está en la lista")
    } else { listaCompra.push(item) }
  }

  $input.value = "";
  search_list();
};

const delete_last = () => {
  listaCompra.pop();
  search_list();
};

const delete_item = (index) => {
    listaCompra.splice(index, 1);
    search_list();
}

const sort_list = () => {
  listaCompra.sort((a, b) => a.localeCompare(b));
  search_list();
};

$search.addEventListener("input", () => {
  search_list();
});

$add_btn.addEventListener("click", () => add_to_list());
$input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add_to_list();
  }
});
$del_btn.addEventListener("click", () => delete_last());

$sort_btn.addEventListener("click", () => sort_list())
show_list();
