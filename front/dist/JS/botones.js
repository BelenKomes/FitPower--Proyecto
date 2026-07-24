document.querySelectorAll(".botón-más-información").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        document.querySelector(`#desc-${e.target.dataset.desc}`).classList.toggle("oculto");
    })
})
