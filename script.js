window.addEventListener("load", () => {
  const form_submit = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list_item = document.querySelector("#todos");
  const todo_count = document.querySelector("#count");

  form_submit.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = input.value;

    const todo_li = document.createElement("li");
    todo_li.classList.add("indv-todo");

    const todo_text = document.createElement("div");
    todo_text.classList.add("todo-text");

    const todo_input_el = document.createElement("input");
    todo_input_el.classList.add("todo-text");
    todo_input_el.type = "text";
    todo_input_el.value = todo;
    todo_input_el.setAttribute("readonly", "readonly");

    const todo_input_check = document.createElement("input");
    todo_input_check.type = "checkbox";

    todo_text.appendChild(todo_input_check);
    todo_text.appendChild(todo_input_el);

    todo_li.appendChild(todo_text);

    const todo_actions_el = document.createElement("div");
    todo_actions_el.classList.add("actions");

    const todo_edit_el = document.createElement("button");
    todo_edit_el.classList.add("icon", "edit-icon");

    const todo_edit_icon = document.createElement("i");
    todo_edit_icon.classList.add("fas", "fa-edit");
    todo_edit_el.appendChild(todo_edit_icon);

    const todo_save_el = document.createElement("button");
    todo_save_el.classList.add("icon", "save-icon");

    const todo_save_icon = document.createElement("i");
    todo_save_icon.classList.add("fas", "fa-save");
    todo_save_el.appendChild(todo_save_icon);

    const todo_delete_el = document.createElement("button");
    todo_delete_el.classList.add("icon", "delete-icon");

    const todo_delete_icon = document.createElement("i");
    todo_delete_icon.classList.add("fas", "fa-trash-alt");
    todo_delete_el.appendChild(todo_delete_icon);

    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);

    todo_li.appendChild(todo_actions_el);

    list_item.appendChild(todo_li);

    input.value = "";

    todo_edit_el.addEventListener("click", (e) => {
      todo_actions_el.removeChild(todo_edit_el);
      todo_actions_el.removeChild(todo_delete_el);

      todo_actions_el.appendChild(todo_save_el);
      todo_actions_el.appendChild(todo_delete_el);

      todo_input_el.removeAttribute("readonly");
      todo_input_el.focus();
    });

    todo_save_el.addEventListener("click", (e) => {
      todo_actions_el.removeChild(todo_save_el);
      todo_actions_el.removeChild(todo_delete_el);

      todo_actions_el.appendChild(todo_edit_el);
      todo_actions_el.appendChild(todo_delete_el);

      todo_input_el.setAttribute("readonly", "readonly");
    });

    todo_delete_el.addEventListener("click", (e) => {
      list_item.removeChild(todo_li);

      todo_count.innerHTML = `Total Tasks : ${
        document.getElementById("todos").getElementsByTagName("li").length
      }`;
    });

    todo_input_check.addEventListener("change", (e) => {
      if (e.target.checked) {
        todo_li.style.backgroundColor = "#dee2ff";
        todo_input_el.style.backgroundColor = "#dee2ff";
      } else {
        todo_li.style.backgroundColor = "#f8edeb";
        todo_input_el.style.backgroundColor = "#f8edeb";
      }
    });

    todo_count.innerHTML = `Total Tasks : ${
      document.getElementById("todos").getElementsByTagName("li").length
    }`;
  });
});
