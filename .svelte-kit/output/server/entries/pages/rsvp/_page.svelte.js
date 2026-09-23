import { D as store_get, N as ensure_array_like, Q as maybe_selected, F as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { l as language } from "../../../chunks/language.js";
/* empty css                                                               */
import { e as escape_html, a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentText;
  let people = [""];
  let email = "";
  let attending = "Yes";
  let guests = 1;
  let message = "";
  let loading = false;
  const translations = {
    en: {
      success: "🎉 Thank you for your RSVP!",
      title: "RSVP",
      requiredName: "First and Last Name *",
      addPerson: "Add another person",
      removePerson: "Remove person",
      email: "Email *",
      attend: "Will you attend?",
      guestCount: "Number of Guests",
      notes: "Message",
      submit: "Submit RSVP",
      submitting: "Submitting...",
      required: "Please fill in all required fields."
    },
    es: {
      success: "🎉 ¡Gracias por confirmar tu asistencia!",
      title: "RSVP",
      requiredName: "Nombre y apellido *",
      addPerson: "Agregar otra persona",
      removePerson: "Eliminar persona",
      email: "Correo electrónico *",
      attend: "¿Asistirás?",
      guestCount: "Número de invitados",
      notes: "Mensaje",
      submit: "Enviar RSVP",
      submitting: "Enviando...",
      required: "Por favor completa todos los campos requeridos."
    }
  };
  currentText = translations[store_get($$store_subs ??= {}, "$language", language)];
  {
    $$payload.out += "<!--[!-->";
    const each_array_1 = ensure_array_like(people);
    $$payload.out += `<div class="rsvp-body svelte-1btxvwt"><div class="page-title svelte-1btxvwt"><div class="page-title-text svelte-1btxvwt">${escape_html(currentText.title)}</div></div> <form class="rsvp-box rsvp-form svelte-1btxvwt" novalidate>`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="people-list svelte-1btxvwt"><!--[-->`;
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      each_array_1[index];
      $$payload.out += `<div class="person-row svelte-1btxvwt"><label class="svelte-1btxvwt">${escape_html(currentText.requiredName)} <input type="text"${attr("value", people[index])} required class="svelte-1btxvwt"/></label> `;
      if (people.length > 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button type="button" class="remove-person svelte-1btxvwt"${attr("aria-label", currentText.removePerson)}>-</button>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--> <button type="button" class="add-person svelte-1btxvwt"${attr("disabled", people.length >= 5, true)}>+ ${escape_html(currentText.addPerson)}</button></div> <label class="svelte-1btxvwt">${escape_html(currentText.email)} <input type="email"${attr("value", email)} required class="svelte-1btxvwt"/></label> <label class="svelte-1btxvwt">${escape_html(currentText.attend)} <select class="svelte-1btxvwt">`;
    $$payload.select_value = attending;
    $$payload.out += `<option value="Yes"${maybe_selected($$payload, "Yes")}>${escape_html(store_get($$store_subs ??= {}, "$language", language) === "en" ? "Yes" : "Sí")}</option><option value="No"${maybe_selected($$payload, "No")}>No</option>`;
    $$payload.select_value = void 0;
    $$payload.out += `</select></label> <label class="svelte-1btxvwt">${escape_html(currentText.guestCount)} <input type="number" min="1"${attr("value", guests)} class="svelte-1btxvwt"/></label> <label class="svelte-1btxvwt">${escape_html(currentText.notes)} <textarea class="svelte-1btxvwt">`;
    const $$body = escape_html(message);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea></label> <button type="submit"${attr("disabled", loading, true)} class="svelte-1btxvwt">`;
    {
      $$payload.out += "<!--[!-->";
      $$payload.out += `${escape_html(currentText.submit)}`;
    }
    $$payload.out += `<!--]--></button></form></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
