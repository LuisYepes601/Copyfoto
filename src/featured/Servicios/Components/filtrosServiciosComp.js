import { renderizarServices } from "../Components/seccionServices.js";


export function crearFiltrosServicios(data, containerService) {

    const containerFilters = document.createElement("section");
    containerFilters.classList.add("container-filters");

    const title = document.createElement("h2");
    title.classList.add("container-filter-title");
    title.textContent = "Filtrar Busquedas"

    const containerFiltersMain = document.createElement("div");
    containerFiltersMain.classList.add("container-filter-main");

    const filterSearch = document.createElement("input");
    filterSearch.classList.add("filter-searhc");
    filterSearch.type = "search";
    filterSearch.id = "search";
    filterSearch.name = "search";
    filterSearch.placeholder = "Buscar Servicio..."

    const filterCategory = document.createElement("select");
    filterCategory.classList.add("filter-category");

    const opt = document.createElement("option");
    opt.value = "all"
    opt.textContent = "Seleccione una Categoria";

    const optFot = document.createElement("option");
    optFot.textContent = "Fotocopias";
    optFot.value = "Fotocopia";

    const optImp = document.createElement("option");
    optImp.textContent = "Impresiones";
    optImp.value = "Impresion";

    filterCategory.append(opt, optFot, optImp);

    containerFiltersMain.append(filterCategory, filterSearch)

    containerFilters.append(title, containerFiltersMain);

    let Filters = { search: filterSearch, category: filterCategory };


    filterCategory.addEventListener("input", (e) => {
        console.log(Filters.category.value);

        aplicarfiltros(Filters, data, containerService);

    })

    filterSearch.addEventListener("input", () => {


        aplicarfiltros(Filters, data, containerService);

    })


    return containerFilters;



}

function aplicarfiltros(Filters, data, containerService) {



    let prueba = data.filter(d => {

        if (Filters.search.value === "" && Filters.category.value == "all") {
            return true;
        }

        if (d.title.toLowerCase().includes(Filters.search.value) && Filters.category.value == "all") {
            return true;
        }

        if (Filters.search.value === "" && Filters.category.value == d.tipoService && Filters.search.value === "") {
            return true;
        }
        if (d.title.toLowerCase().includes(Filters.search.value) && d.tipoService == Filters.category.value) {

            return true;
        } else {
            return false;
        }
    })




    renderizarServices(containerService, prueba);




}