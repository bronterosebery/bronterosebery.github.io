(() => {
    const navSelect = document.querySelector("#folio-category");

    navSelect.addEventListener("change", () => {
        window.location = navSelect.value;
    });
})();
