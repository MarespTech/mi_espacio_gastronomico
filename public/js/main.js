document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    const agregar_ingredientes_btn = document.getElementById("agregar_ing");
    const agregar_instrucciones_btn = document.getElementById("agregar_inst");

    if(agregar_ingredientes_btn){
      agregar_ingredientes_btn.addEventListener("click", agregar_ingredientes);

      const lista_ingredientes_input = document.getElementById("lista_ingredientes_input");
    }
    if(agregar_instrucciones_btn){
      agregar_instrucciones_btn.addEventListener("click", agregar_instrucciones);

      const lista_instrucciones_input = document.getElementById("lista_instrucciones_input");
    }


  });

  function agregar_ingredientes(e) {
    e.preventDefault();

    let item = document.createElement('li');
    item.innerHTML = `
      <div class="input-field">
        <input class="ingredientes" type="text" name="ingredientes" id="ingredientes">
        <label for="ingredientes">Ingrediente</label>
      </div>
    `;

    lista_ingredientes_input.appendChild(item);
  }

  function agregar_instrucciones(e) {
    e.preventDefault();

    let item = document.createElement('li');
    item.innerHTML = `
      <div class="input-field">
        <input class="instrucciones" type="text" name="instrucciones" id="instrucciones">
        <label for="instrucciones">Instruccion</label>
      </div>
    `;

    lista_instrucciones_input.appendChild(item);
  }