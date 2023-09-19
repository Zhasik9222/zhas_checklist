let input = document.querySelector('.input');
let submit_btn = document.querySelector('.submit_btn').addEventListener('click', add_new_item);

let main_to_do_items_container = document.querySelector('.main_ul');

function add_new_item() {
    let value_of_input = input.value;

    let div_list = document.createElement('div');
    div_list.style.display = "flex";
    div_list.style.alignItems = "center";
    div_list.style.margin = "10px 0px 10px 10px";

    let new_checkbox = document.createElement('input');
    new_checkbox.type = "checkbox";
    new_checkbox.className = "check_box_ul";
    new_checkbox.style.padding = "10px";

    let new_item = document.createElement('li');
    new_item.textContent = value_of_input;
    new_item.className = "list";

    main_to_do_items_container.append(div_list);
    div_list.append(new_checkbox);
    div_list.append(new_item);

    input.value = null;
}
