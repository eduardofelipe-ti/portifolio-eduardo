"use strict";
const config = window.SITE_CONFIG || {};
const phone = /^\d{12,15}$/.test(config.whatsapp || "") ? config.whatsapp : "";
const greeting = "Olá Eduardo, encontrei seu site e gostaria de conversar sobre a criação de um site para minha empresa.";
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
if (menu && nav) {
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", String(open)); menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); nav.classList.toggle("is-open", open); });
  nav.addEventListener("click", event => { if (event.target.closest("a")) { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); } });
  document.addEventListener("keydown", event => { if (event.key === "Escape") { nav.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); } });
}
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll("[data-whatsapp]").forEach(el => {
  if (phone) { el.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(greeting); el.target = "_blank"; el.rel = "noopener noreferrer"; }
});
document.querySelectorAll("[data-social]").forEach(el => {
  const key = el.dataset.social; const value = config[key];
  if (value && (key === "email" || /^https:\/\//.test(value))) { el.href = key === "email" ? "mailto:" + value : value; if(key !== "email") {el.target = "_blank"; el.rel = "noopener noreferrer";} }
  else if (key === "github") el.setAttribute("aria-label", "GitHub: perfil ainda não informado. Ver opções de contato");
});
if (config.email) document.querySelectorAll("[data-email-label]").forEach(el => el.textContent = config.email);
if (config.github) document.querySelectorAll("[data-github-label]").forEach(el => el.textContent = "Ver projetos no GitHub");
const availability = document.querySelector("[data-contact-status]");
if (availability && !phone) availability.textContent = config.netlifyForms ? "WhatsApp em preparação. Use o formulário ou fale comigo pelo LinkedIn." : "WhatsApp e envio de mensagens em preparação. Você já pode falar comigo pelo LinkedIn.";
const form = document.querySelector("#formulario");
if (form) {
 const feedback = form.querySelector(".form-feedback"); const copy = form.querySelector(".copy-message"); let prepared = "";
 form.addEventListener("submit", event => {
  if (config.netlifyForms && location.protocol !== "file:") return;
  event.preventDefault(); const data = new FormData(form);
  prepared = `Olá Eduardo! Sou ${data.get("nome")}\nEmpresa: ${data.get("empresa") || "Não informada"}\nContato: ${data.get("contato")}\nTipo de site: ${data.get("tipo")}\n\n${data.get("mensagem")}`;
  if (phone) { window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(prepared), "_blank", "noopener,noreferrer"); feedback.textContent = "A conversa foi aberta no WhatsApp. Confirme o envio por lá para concluir seu pedido."; }
  else { feedback.textContent = "Sua mensagem ainda não foi enviada: este formulário está em preparação. Copie o texto e envie pelo LinkedIn de Eduardo."; }
  copy.hidden = false;
 });
 copy.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(prepared); feedback.textContent = "Mensagem copiada. Agora você pode colar na conversa com Eduardo."; }
  catch { const text = document.createElement("textarea");text.value=prepared;form.appendChild(text);text.select();feedback.textContent="Selecione e copie a mensagem abaixo para enviar a Eduardo.";copy.hidden=true; }
 });
}
